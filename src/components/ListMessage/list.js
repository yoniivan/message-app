import React from 'react';
import './list.css';


const List = (props) => {

    return (
        <div className="listMessageContainder">
            <h1>{props.title}</h1>
            <h1>{props.message}</h1>
        </div>
    );
  

}

export default List;