import Attributes from './Attributes';

class Character {

  name = 'Olaf the Awesome';
  characterClass = 'Fighter';
  race = 'Human';
  level = 1;
  hitPoints = 10;
  hitDice = '1d6';
  attributes = new Attributes();

}

export default Character;
