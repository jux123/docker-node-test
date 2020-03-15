import React from 'react';

const personalInfo = (props) => {

  let {name, race, characterClass} = props;

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

export default personalInfo;
