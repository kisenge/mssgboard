import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
//import { TextInput} from 'react-native';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';


const style = {
  
  button: {
    padding: '10px 20px',
    backgroundColor: 'white',  // Green
    border: 'none',
    color: 'blue',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '8px',
  },

};


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
      

      <Button style={style.button} onClick={togglePopup}>
      Add Message
      </Button>
      
      {isOpen && (
        <div className="popup">
          {/* Popup content */}
          <h1>What's on your mind?</h1>
          <p>I'm sorry I can't come to the phone right now. Please leave a message after the tone.
            <br />
            <br />
            (You may need to try posting again, if you don't see your message after pressing post. Thanks for your patience.)
          </p>
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
