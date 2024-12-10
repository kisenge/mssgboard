import React from 'react';
import Popup from '../atoms/Popup';
import {Text, StyleSheet} from 'react-native';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import logo from '../graphics/logo.png';
import {useState, useEffect} from 'react';
import dotenv from 'dotenv';
import { useLocation } from "react-router-dom";
import Avatar from 'boring-avatars';

import supabase  from '../../supabase-backend/supabaseClient';
import GridComponent from '../atoms/GridComponent';
import Footer from '../atoms/Footer';

require('dotenv').config();






const style = {
  pageContainer: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#d2303b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTitle: {
    fontSize: 48,
    fontWeight: 500,
    color: '#ffffff',
    marginBottom: 20,
  },
  centre: {
    alignItems:"center",
    justifyContent:"center"
  },
  banner: {
    //maxWidth: '100%',
    //maxHeight: '10%',
    //height: '100px'
    width: '1000px',
    height: '300px',
    objectFit: 'scale-down'
  },
  roundedEdge: {
    borderRadius: 8

  },
  popContainer: {
  position: 'relative', /* Ensure the container has a defined position */
  width: '100%', /* Set the width of the container */
  height: '100vh' /* Set the height of the container */
},
pop: {
  //margin:"0 auto",
   display: 'flex',
  //maxWidth: '66%', // Set the maximum width of the div

  justifyContent:"center",
  alignItems:"center",
  height: '10vh',

},
logoContainer: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%', // Full width of the container
  height: '50vh', // Full height of the viewport
  overflow: 'hidden', // No overflow to prevent extra whitespace
  margin:'0'
},
logo: {
  width: '100%', // Let the logo take up the full width of the container
  height: 'auto', // Maintain the aspect ratio
  maxWidth: '500px', // Prevent the logo from getting larger than 500px
  objectFit: 'contain', // Ensure the logo is contained without distortion
  margin:'0'
},
welcomeBarContainer: {
  display: 'flex',  // Enable flexbox
  justifyContent: 'flex-end', // Optional: adjust spacing
  alignItems: 'center', // Center align vertically
  backgroundColor: 'yellow',
  height: '80px'
  
},
welcomeBarBox1: {
  width: '100px',
  height: '70px',
  margin: '2px',
  //alignItems: 'center'
},
welcomeBarBox2: {
  width: '300px',
  height: '70px',
  margin: '2px',
 // alignItems: 'center'
}

};

const Feed = () => {

  const location= useLocation();
  const data2receive= location.state;


  const navigate = useNavigate()
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);


  const [isOpen, setIsOpen] = useState(false)
   const toggleDrawer = () => {
       setIsOpen((isOpen) => !isOpen)
   }

   
   const fetchMessages = async () => {
   
    try {
      const { data, error } = await supabase.from('messages').select('*');
      if (error) {
        setError('Error fetching messages');
        console.error('Error fetching messages:', error);
      } else {
        setMessages(data);
        console.log('Fetched messages:', data);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('Unexpected error occurred');
    } 
  };


  const createMessage = async (username,message,colours) => {
   
    try {
     
      
      const { data, error } = await supabase
      .from('messages')
      .insert([
        { username: username, message: message, colours: colours },
      ])
      .select()
        

      if (error) {
        setError('Error creating messages');
        console.error('Error creating messages:', error);
      } else {
        //setMessages(data);
        console.log('Created messages:', data);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('Unexpected error occurred');
    } 
  };



  

   
   useEffect(() => {
     fetchMessages();
   }, []);



  return (
  
    <Stack
      direction="column"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={10}
    >



      <div style={style.logoContainer}>
        <img style={style.logo} src={logo} />
      </div>

      <div style={style.welcomeBarContainer}>
        <div style={style.welcomeBarBox2}>
        <h3>We are glad you are here, {data2receive.name}</h3>
        </div>

        <div style={style.welcomeBarBox1}>
        <Avatar
          size={60}
          name=""
          variant="marble"
          colors={data2receive.colours}
        />
        
        </div>
      </div>

      


      <div style={style.pop}>
      <Popup username={data2receive.name} colours={data2receive.colours} createMessageFunction={createMessage}/>
      </div>



      <GridComponent/>

      <Footer/>




    </Stack>








  );
};

export default Feed;
