import React, { useState,useEffect } from 'react'
import './Sidebar.css'
import AddBoxIcon from '@material-ui/icons/AddBox';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SidebarChannel from './SidebarChannel';
import SignalCellular4BarIcon from '@material-ui/icons/SignalCellular4Bar';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from "@material-ui/core";
import MicIcon from '@material-ui/icons/Mic';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import db,{auth} from './Firebase';

/* Importing signs already made */
function Sidebar()
{
    const user =useSelector(selectUser);
    const [channels,setChannels]=useState([]);
    useEffect(() => {
        /* Update in real time if we add or modify a channel  */
        db.collection("channels").onSnapshot((snapshot) =>
                setChannels(    
                    snapshot.docs.map((doc) =>({
                    id: doc.id,  /* Document id,the ones from Firebase */    /* For every doc we will retrun an object */
                    channel: doc.data(), /* Whhich will be the channel name */
                }))
            )
        );
    }, []);
    const handleAddChannel = () => {
        const channelName =prompt("Enter a name for the new channel");
        if(channelName){
            db.collection('channels').add({
                channelName:channelName,
            });
        }
    };
   
    return(
        <div className="sidebar">
                
                    <div className="Top_Sidebar">  
                        <h2>PolyChat DR</h2>
                      
                        
                         <AddBoxIcon/>
                    </div>  
            <div className= "Channels_Sidebar" > 
            
                    <div className= "HeaderChannels_Sidebar" >  
                        <div className= "Header_Sidebar" >  
                            {/* Here we will have the channels  */}
                                <ArrowDropDownIcon/>
                                    <h4>Chat</h4>
                         </div>
                         <AddCircleIcon onClick={handleAddChannel} className="Add_Channel" />
                         {/* Remember to give it the permission from Firebase->Database->Rules  */}
                    </div>
                  

                    <div className="ChannelList_Sidebar">
                        
                        {channels.map(({id,channel}) => (
                            /* Channel breaks down into id and channel and it s no more just channel */
                            <SidebarChannel
                             key={id}
                              id={id}
                               channelName={channel.channelName}
                             />   

                        ))}
                          
                          
                    </div>
            </div>
            <div className="Voice_Sidebar">
                    <SignalCellular4BarIcon
                        className="VoiceIcon_Sidebar"
                        fontSize="large"
                    />
                    <div className="VoiceInfo_Sidebar">
                        <h3>Voice Connected</h3>
                        <p>Live Stream</p>

                    </div>
                    <div className="VoiceIcons_Sidebar">
                        <InfoIcon />
                        <CallIcon />
                    </div>
            </div>
            <div className="Profile_Sidebar">
                <Avatar
                 onClick={()=> auth.signOut()}  
                 src={user.photo}   />
                <div className="Profile_Info_Sidebar">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0,5)}</p>
                </div>
            <div className="ProfileIcons_Sidebar">
            <MicIcon />
            <HeadsetMicIcon />
            <SettingsApplicationsIcon />
            </div>
            </div>
            
        </div>
        
            
    );
}
export default Sidebar //in order to be visible in app.jss