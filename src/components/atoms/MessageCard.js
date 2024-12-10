import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import {useState, useEffect} from 'react';
import Avatar from 'boring-avatars';

const style = {
    messageBox: {
      overflowWrap: 'break-word', // Allow long words to break to the next line
      whiteSpace: 'normal', // Allow text to wrap normally
    },
    grey: {
        color:'grey'
      },
    card: {
    margin: '20px', // Optional margin around the card
    display: 'flex', // Make the card a flex container
    flexDirection: 'column', // Align children vertically
    justifyContent: 'space-between', // Distribute space between elements
  
    },
    cardContent: {
    display: 'flex',
    flexDirection: 'column', // Stack children vertically
    flexGrow: 1, // Allow content to grow and fill space
    },
    bodyText: {
    flexGrow: 1, // Allow the body text to take up available space
    },
    footerText: {
    marginTop: 'auto', // Push the footer text to the bottom
    },
    avatarContainer:{
    display: 'flex', // Make the card a flex container
    flexDirection: 'row', // Align children vertically
    justifyContent: 'flex-start', // Distribute space between elements
    alignItems:'center'
    },
    avatarBox:{
        marginRight:'10px'
        },



}


const MessageCard = (dataIn) => {
    const [userName,setuserName]= useState('');
    const [message,setMessage]= useState('');
    //avatar
    const [date,setDate]= useState('');
    const shortDate= dataIn.date.substring(0,10)
    const time= dataIn.date.substring(12,19)
    //const col=  Array.isArray(dataIn.colours) ? dataIn.colours : Array.from(dataIn.colours || []);
    const col= []
    try {
        const col = JSON.parse(dataIn.colours); // Parsing the JSON string
    
        // Confirming that the parsed value is an array
        if (Array.isArray(col)) {
            console.log("Successfully parsed and confirmed as an array:");
        } else {
            console.log("Parsed value is not an array");
        }
    } catch (error) {
        console.error("Failed to parse JSON:", error);
    }

    return (
        
        <div>

            <Avatar
              size={50}
              name=""
              variant="marble"
              colors= {col}
            />


        <Card sx={{ width: 300, height: 400 }} style={style.card}> {/* Adjust width and height here */}
        <CardContent style={style.cardContent}>
            <div style={style.bodyText}>
                <div style={style.avatarContainer}> 
                    <div style={style.avatarBox}> 
                        <Avatar
                        size={50}
                        name=""
                        variant="marble"
                        colors= {dataIn.colours}
                        />
                    </div>
                    <div style={style.avatarBox}> 
                    <Typography variant="subtitle2" fontWeight="bold">{dataIn.username}</Typography>
                    </div>
                    
                </div>

                <div style={style.messageBox}>
                    <br />
                    <Typography variant="subtitle1" >{dataIn.message}</Typography>
                </div>
                
                <br />
                <br />
            </div>
            <div style={style.footerText}>
                <Typography variant="caption" style={style.grey}>{time}</Typography>
                <br />
                <Typography variant="caption" style={style.grey}>{shortDate}</Typography>
            </div>
        </CardContent>
        </Card>




        </div>
    );
}

export default MessageCard;






  
