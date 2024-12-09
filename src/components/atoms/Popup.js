import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
//import { TextInput} from 'react-native';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from 'react-router-dom';


function Popup(props) {
  const [isOpen, setIsOpen] = useState(false);

  //initialize to emtpy
  const [message, setMessage] = useState('');

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSetMessage = (event) => {
    setMessage(event.target.value); // Update the state variable with the new text
  };

  const navigate = useNavigate()

  return (
    <div>
      <IconButton color="primary"  onClick={togglePopup} size={'large'}>
        <AddIcon size={'large'}/>
      </IconButton>
      
      {isOpen && (
        <div className="popup">
          {/* Popup content */}
          <h1>What's on your mind?</h1>
          <p>I'm sorry I can't come to the phone right now. Please leave a message after the tone.</p>
          <TextField
          fullWidth
          multiline
          inputProps={{ maxLength: 195 }}
          onChange={handleSetMessage} // Call handleInputChange whenever text changes
          />
          
          <button onClick={() => {
            props.createMessageFunction(props.username,message,props.colours);
            navigate(0);
          
          }}>Post</button>
        </div>
      )}
    </div>
  );
}

export default Popup;
