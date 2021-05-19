import React from 'react'
import "./Chat_Header.css"
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SendIcon from '@material-ui/icons/Send';
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from '@material-ui/icons/Search';
function Chat_Header({ channelName }) {
    return (
        <div className="chatHeader">
           
             <div className="ChatHeader_Left">
                 <h3>
                    <span className="ChatHeader_Hash">#</span> 
                     {channelName}
                 </h3>
             </div>
               <div className="ChatHeader_Right">
                     <ExploreIcon />
                     <NotificationsActiveIcon />
                     <SupervisedUserCircleIcon />

                   <div className="ChatHeder_Search">
                       <input placeholder="Search" />
                       <SearchIcon/>
                   </div>
                        <SendIcon/>
                        <HelpIcon/>

                  
                   
              </div> 
        </div>
    );
}

export default Chat_Header
