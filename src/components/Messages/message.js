import React, { Component } from 'react';
import './message.css';


const Message = (props) => {

  
  return (
    <div className="messageContainer">
        <input 
          value={props.title}
          onChange={props.titleChange}
        />
        <textarea 
          value={props.msgBody}
          onChange={props.msgChange}
        />
        <button onClick={props.click}>Add message</button>
    </div>
  )
  

}

export default Message;
