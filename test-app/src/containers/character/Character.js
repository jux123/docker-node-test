import React from 'react';
import PersonalInfo from './../../components/PersonalInfo';

const character = () => {

  //characterData = new CharacterData();

  return (
    <div>
      <ul>
        <h3>Personal Info</h3>
        <PersonalInfo name = 'n' race = 'r' characterClass = 'c'/>
        <li>Attributes</li>
        <li>Skills</li>
        <li>Gear</li>
      </ul>
    </div>
  );
}

export default character;
