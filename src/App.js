import React, { Component } from 'react';

import Message from './components/Messages/message'
import List from './components/ListMessage/list';
import './App.css';

class App extends Component {

  state = {
    allMessage: [],
    title: null,
    message: null
  }

  titleInputHandler = (event) => {
    this.setState({title: event.target.value})
  }

  msgInputHandler = (event) => {
    this.setState({message: event.target.value})
  }

  addMessagesHandler = () => {

    let msg = this.state.allMessage.slice();
    msg.push({title: this.state.title, message: this.state.message});
    this.setState({allMessage: msg});
  }

  render(){


    let messages = null

    if (this.state.allMessage.length !== 0) {
      messages =  (
        this.state.allMessage.map(msg => {
          return <List 
                    title={msg.title}
                    message={msg.message} 
                  />
        })
      );
    }

    return(
      <div className="App">
        <div className="messageInput">
          <Message 
            titleChange={this.titleInputHandler}
            msgChange={this.msgInputHandler}
            click={this.addMessagesHandler}
          />
        </div>

        <div className="messageList">
          {/* <List title={"this.state.message"} message={"this.state.message[0].message"}/> */}
          {messages}
        </div>

      </div>
    )
  }
}

export default App;
