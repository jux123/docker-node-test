import React, { useState } from 'react';
import PersonalInfo from './../../components/PersonalInfo';
import AttributesSection from './../../components/AttributesSection';
import Character from './../../domain/Character';


const CharacterGenerator = () => {

  const [characterState, setCharacterState] = useState(new Character());

  const rerollAttributes = () => {
    const characterCopy = {};
    Object.assign(characterCopy, characterState); // spread did not work
    characterCopy.attributes.generate();
    setCharacterState(characterCopy);
  }

  return (
    <div>
      <ul>
        <h3>Personal Info</h3>
        <PersonalInfo character = {characterState} />
        <li>
          Attributes: <br />
          <AttributesSection attributes = {characterState.attributes} rerollHandler = {rerollAttributes} />
        </li>
        <li>Skills</li>
        <li>Gear</li>
      </ul>
    </div>
  );
}

export default CharacterGenerator;
