import React from 'react';

const PersonalInfo = (props) => {

  let {name, race, characterClass} = props.character;

  return (
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Race: {race}</li>
        <li>Class: {characterClass}</li>
        <li>XP bonus:</li>
        <li>HP: </li>
        <li>HD: </li>
        <li>Saving throw: </li>
      </ul>
    </div>
  );

}

export default PersonalInfo;
