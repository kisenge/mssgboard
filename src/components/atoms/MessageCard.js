import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import {useState, useEffect} from 'react';
import Avatar from 'boring-avatars';


const MessageCard = (dataIn) => {
    const [userName,setuserName]= useState('');
    const [message,setMessage]= useState('');
    //avatar
    const [date,setDate]= useState('');

    return (
        <Card sx={{ width: 300, height: 200 }}> {/* Adjust width and height here */}
        <CardContent>
            <Avatar
              size={200}
              name=""
              variant="marble"
              colors={dataIn.colours}
            />
            <Typography variant="subtitle2">{dataIn.userName}</Typography>
            <Typography variant="subtitle1">{dataIn.message}</Typography>
            <Typography variant="caption">{dataIn.data}</Typography>
        </CardContent>
        </Card>
    );
}

export default MessageCard;






  
