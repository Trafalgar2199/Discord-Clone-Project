import React from 'react';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from './features/appSlice';
import "./SidebarChannel.css";


function SidebarChannel({id,channelName}) {
    const dispatch = useDispatch();
    return (
        <div className="SidebarChannel" 
        onClick={() =>
             dispatch(
                 setChannelInfo({
                     channelId: id,
                     channelName: channelName,
                 })
                )
                }
                 >
            <h4>
                <span ClassName="SidebarChannel_hash">#</span>{channelName} {/* We gonna paste the channel name instead of Main_Room */}
            </h4>
        </div>
    )
}

export default SidebarChannel
