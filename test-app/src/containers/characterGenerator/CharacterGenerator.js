import React, { useState } from 'react';
import PersonalInfo from './../../components/PersonalInfo';
import Character from './../../domain/Character';


const CharacterGenerator = () => {

  const [characterDataState, setCharacterDataState] = useState({ character: new Character() });

  return (
    <div>
      <ul>
        <h3>Personal Info</h3>
        <PersonalInfo character = {characterDataState.character} />
        <li>Attributes</li>
        <li>Skills</li>
        <li>Gear</li>
      </ul>
    </div>
  );
}

export default CharacterGenerator;
