import React from "react";
import MessageCard from "./MessageCard";
import supabase  from '../../supabase-backend/supabaseClient';
import {useState, useEffect} from 'react';



const style = {
    flexContainer:{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",  // Gap between items
        padding: "20px"
    },
    flexItem: {
        backgroundColor: "#f0f0f0",
        border: "1px solid #ccc",
        padding: "20px",
        flex: "0 0 33.3333%",  // 3 items per row
        textAlign: "center",
        boxSizing: "border-box"
    }
  
  };
  




const GridComponent = () => {
  
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  
  






  //get data from supabase and put in array
  useEffect(() => {
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

    fetchMessages();


   
  }, []);  


  return (
    <div style={style.flexContainer}>
      {messages.map((message) => (
  
          
          <MessageCard username={message.username} message={message.message} date={message.created_at} colours={message.colours}/>
  
      ))}
    </div>
  );
};

export default GridComponent;



  
  