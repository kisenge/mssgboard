import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
//import { TextInput} from 'react-native';

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

  return (
    <div>
      <button onClick={togglePopup}>Add Message</button>
      {isOpen && (
        <div className="popup">
          {/* Popup content */}
          <h1>What's on your mind?</h1>
          <p>I'm sorry I can't come to the phone right now. Please leave a message after the tone.</p>
          <TextField
          fullWidth
          multiline
          onChange={handleSetMessage} // Call handleInputChange whenever text changes
          />
          
          <button onClick={() => props.createMessage(props.usernameProp,message)}>Post</button>
        </div>
      )}
    </div>
  );
}

export default Popup;
