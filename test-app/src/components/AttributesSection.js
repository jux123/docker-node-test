import React from 'react';

const AttributesSection = (props) => {

  let {attributes, rerollHandler} = props;

  return (
    <div>
      str: {attributes.str}
      dex: {attributes.dex}
      con: {attributes.con}
      int: {attributes.int}
      wis: {attributes.wis}
      cha: {attributes.cha}
      <button onClick = {rerollHandler}>Reroll</button>
    </div>
  );
}

export default AttributesSection;
