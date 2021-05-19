import React from 'react'
import "./Message.css"
import { Avatar } from "@material-ui/core";

function Message({timestamp,user,message}){
        return (
            <div className="Message">
                <Avatar src={user.photo} />
                <div className="Message_Info">
                    <h4>
                        {user.displayName}
                        <span className="Message_TimeStamp">
                        {new Date(timestamp?.toDate()).toUTCString()}
                        </span>
                    </h4>
                    <p>{message}</p>
                </div>
            </div>
        );
}
export default Message;
