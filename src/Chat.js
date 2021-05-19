import React, { useEffect, useState } from 'react';
import './Chat.css';
import Chat_Header from './Chat_Header';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Gif } from '@material-ui/icons';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectChanneliD, selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';
import db from './Firebase';
import firebase from "firebase"
function Chat() {
    const channelId=useSelector(selectChanneliD);
    const user=useSelector(selectUser);
    const channelName=useSelector(selectChannelName);
    const [input,setInput]=useState("");
    const [messages,setMessages]=useState([])

    useEffect(() => {

        if(channelId){
            db.collection('channels')
            .doc(channelId)
            .collection("messages")
            .orderBy('timestamp','asc')
            .onSnapshot(snapshot => 
                setMessages(snapshot.docs.map(doc => doc.data()))
                );
    
        }

       
    },[channelId]);
/* Part which actually sends the messages in chat */
    const sendMessage=e=>{
        e.preventDefault();
        db.collection("channels").doc(channelId).collection("messages").add({
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                user: user,
                /* We want to see the name of the sender */

        });
setInput("");
    };

    return (
        <div>
            <div className="Chat_Design">

            <Chat_Header channelName={channelName}/>
            <div className="Chat_Messages">
              {messages.map((message )=> (
                  <Message
                  timestamp={message.timestamp}
                  message={message.message}
                  user={message.user}
                  
                  
                  />

              ))}
            </div>
            <div className="Chat_Input">
            <AddCircleOutlineIcon fontSize='Large'/>
            <form>
                <input 
                disabled={!channelId} /* Right after u log in there is no channel id,so it won t let u write if u dont select a channel id first */
                value={input} onChange={e=>setInput(e.target.value)}  
                placeholder={"Write something"}             
                />
                <button 
                disabled={!channelId}
                className="Chat_InputButton" 
                type="submit"
                onClick={sendMessage}
                >
                    Send Message
               
                </button> 
                {/* A button which will be actioned by enter */}
            </form>

                <div className="Chat_InputIcons">
                <Gif fontSize='Large' />
                <CardGiftcardIcon fontSize='Large'/>
                <SentimentVerySatisfiedIcon fontSize='Large'/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Chat
