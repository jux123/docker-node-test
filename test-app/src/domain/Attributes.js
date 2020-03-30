import {rollXD6} from '../util/diceRoller'

class Attributes {
  str = 0;
  dex = 0;
  con = 0;
  int = 0;
  wis = 0;
  cha = 0;

  constructor () {
    this.generate();
  }

  generate = () => {
    this.str = rollXD6(3);
    this.dex = rollXD6(3);
    this.con = rollXD6(3);
    this.int = rollXD6(3);
    this.wis = rollXD6(3);
    this.cha = rollXD6(3);
  }
}

export default Attributes;
