import React from 'react';
//import PageTitle from '../atoms/PageTitle';
//import { strings } from '../../constants/strings';
import {Text, StyleSheet, TextInput} from 'react-native';
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
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from 'boring-avatars';






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
  center: {
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
    borderRadius: 8,
    borderColor:'yellow',
    color:'yellow'

  },
  white:{
    color: '#ffffff',
  },
  black:{
    backgroundColor: '#1B1212',
  },
  blackCenterFull:{
    backgroundColor: '#1B1212',
    alignItems:"center",
    justifyContent:"center",
    height:"100vh"
  },
  textBox:{
    fontSize: '40px',
    color: '#ffffff',
    border: "yellow",
    caretColor:'yellow',
    flex:'1'
  },
  title:{
    color: '#ffffff',
    flex:'1'
  },
  flexContainer:{
    display:'flex'
  },
  avatar:{
    position: 'absolute', /* Position the element absolutely */
    bottom: '0', /* Position at the bottom */
    left: '0'
  }


};

const Landing = () => {
  const navigate = useNavigate()



  //initialize to emtpy
  const [username, setUsername] = useState('anonymous_One');




  const handleSetUsername = (inputText) => {
    setUsername(inputText); // Update the state variable with the new text
  };


  const handleClick = () => {

    const data2send = { name: username, color: colors };
    navigate('/feed',{state:data2send});

  };


  function randomHexColors() {
    const letters = '0123456789ABCDEF';
    let color='#';
    let colorArray = [];
    for (let i = 0; i < 6; i++) {
      for (let k = 0; k < 6; k++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      colorArray[i]=color
      color='#'
    }
    return colorArray;
  }

  const colors= randomHexColors()



  return (
    /* <VStack style={style.pageContainer}>
      <PageTitle titleStyle={style.loginTitle} title={strings.cityQuery} />
      <StartApplication />
    </VStack> */


    <Stack
      direction="column"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={5}
      style={style.blackCenterFull}

    >



    <Avatar
      size={200}
      name=""
      variant="marble"
      colors={colors}
    />





    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={10}
      style={style.flexContainer}
    >




      <Typography style={style.title} variant="h2" gutterBottom>
        Please enter a username:
      </Typography>




      <TextInput
      maxLength="18"
      style={style.textBox}
      selectionColor='red'
      onChangeText={handleSetUsername} // Call handleInputChange whenever text changes

      >

      </TextInput>






    </Stack>


    <Box>

      <Button
      style= {style.roundedEdge}
      variant="outlined"
       onClick={() => {
         handleClick()

        }}
      >
      next</Button>

      </Box>

    </Stack>






  );
};

export default Landing;
