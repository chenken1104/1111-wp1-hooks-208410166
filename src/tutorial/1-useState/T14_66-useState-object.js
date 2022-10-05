import React, { useState } from 'react';

const T14_66_UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'chenyukun',
    age: 21,
    message: 'random message'
  });

  const changeMessage = () => {
    setPerson({...person, message: 'yukun chen, 208410166'});
  }

  return <>
     <h3>{person.name}</h3>
     <h3>{person.age}</h3>
     <h4>{person.message}</h4>
     <button className="btn" onClick={changeMessage}>Change Message</button>
  </>;
};

export default T14_66_UseStateObject;
