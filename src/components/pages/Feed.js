import React from 'react';
//import PageTitle from '../atoms/PageTitle';
import Popup from '../atoms/Popup';
//import { strings } from '../../constants/strings';
import {Text, StyleSheet} from 'react-native';
//import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
//import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import logo from '../graphics/logo.png';
//import Image from "material-ui-image";
import {useState, useEffect} from 'react';
import dotenv from 'dotenv';
import { useLocation } from "react-router-dom";
import Avatar from 'boring-avatars';
import Drawer from '@mui/material/Drawer';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

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
    width: '750px',
    height: '337px',
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
  margin:"0 auto",
   display: 'flex',
  maxWidth: '66%', // Set the maximum width of the div

  justifyContent:"center",
  alignItems:"center",
   height: '100vh'

},

};

const Feed = () => {

  const location= useLocation();
  const data2= location.state;


  const navigate = useNavigate()
  const [messages, setMessages] = useState(false);


  const [isOpen, setIsOpen] = useState(false)
   const toggleDrawer = () => {
       setIsOpen((isOpen) => !isOpen)
   }






  function getMessage() {
     fetch('http://localhost:3001')
       .then(response => {
         return response.text();
       })
       .then(data => {
         setMessages(data);
       });
   }


   function createMessage(username,message) {

     fetch('http://localhost:3001/messages', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({username, message}),
     })
       .then(response => {
         return response.text();
       })
       .then(data => {
         alert(data);
         getMessage();
       });
   }



   function deleteMessage() {
     let id = prompt('Enter merchant id');
     fetch(`http://localhost:3001/messages/${id}`, {
       method: 'DELETE',
     })
       .then(response => {
         return response.text();
       })
       .then(data => {
         alert(data);
         getMessage();
       });
   }


   function updateMessage() {
     let id = prompt('Enter message id');
     let name = prompt('Enter new message name');
     let message = prompt('Enter new message email');
     fetch(`http://localhost:3001/messages/${id}`, {
       method: 'PUT',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({name, message}),
     })
       .then(response => {
         return response.text();
       })
       .then(data => {
         alert(data);
         getMessage();
       });
   }

   /*useEffect(() => {
     getMessage();
   }, []);*/

  return (
    /* <VStack style={style.pageContainer}>
      <PageTitle titleStyle={style.loginTitle} title={strings.cityQuery} />
      <StartApplication />
    </VStack> */



    <Stack
      direction="column"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={10}
    >



      <Text style={{color:'blue'}}>
        Home
      </Text>

      <img style={style.banner} src={logo} />

      <p>{data2.name}</p>

      <Avatar
        size={100}
        name=""
        variant="marble"
        colors={data2.color}
      />
      <p>{data2.color}</p>




        <div style={style.pop}>
        <Popup usernameProp={data2.name} createMessage={createMessage}/>
        </div>






        <Stack
        direction="row"
        divider={<Divider orientation="vertical"  />}
        spacing={1}
        //style= {style.centre}
        >





          <Button
          style= {style.roundedEdge}
          variant="outlined"
           onClick={() => {
              navigate('/residents');
            }}
          >
          Manage Residents</Button>






      </Stack>

   <div>

        <br />
        <button onClick={createMessage}>Add merchant</button>
        <br />
        <button onClick={deleteMessage}>Delete merchant</button>
        <br />
        <button onClick={updateMessage}>Update merchant</button>
      </div>




    </Stack>








  );
};

export default Feed;
