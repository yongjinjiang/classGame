import React from 'react';
// random
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var problems=[



];


var answers=[


]


export const Schedule= (props) => {

    return (
       <div className="uniqueName">

      {props.who}
      {getRandomInt(10)}
      {getRandomInt(10)}
      {getRandomInt(10)}

      </div>
    );
  };
