import { Injectable } from '@angular/core';

interface SpellingMap {
	[key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class SpellService {
  public spellingMap: SpellingMap;
  constructor() { 
    this.spellingMap = Object.create( null );
    this.spellingMap[ 'A' ] = 'Alfa';
    this.spellingMap[ 'B' ] = 'Bravo';
    this.spellingMap[ 'C' ] = 'Charlie';
    this.spellingMap[ 'D' ] = 'Delta';
    this.spellingMap[ 'E' ] = 'Echo';
    this.spellingMap[ 'F' ] = 'Foxtrot';
    this.spellingMap[ 'G' ] = 'Golf';
    this.spellingMap[ 'H' ] = 'Hotel';
    this.spellingMap[ 'I' ] = 'India';
    this.spellingMap[ 'J' ] = 'Juliett';
    this.spellingMap[ 'K' ] = 'Kilo';
    this.spellingMap[ 'L' ] = 'Lima';
    this.spellingMap[ 'M' ] = 'Mike';
    this.spellingMap[ 'N' ] = 'November';
    this.spellingMap[ 'O' ] = 'Oscar';
    this.spellingMap[ 'P' ] = 'Papa';
    this.spellingMap[ 'Q' ] = 'Quebec';
    this.spellingMap[ 'R' ] = 'Romeo';
    this.spellingMap[ 'S' ] = 'Sierra';
    this.spellingMap[ 'T' ] = 'Tango';
    this.spellingMap[ 'U' ] = 'Uniform';
    this.spellingMap[ 'V' ] = 'Victor';
    this.spellingMap[ 'W' ] = 'Whiskey';
    this.spellingMap[ 'X' ] = 'X-ray';
    this.spellingMap[ 'Y' ] = 'Yankee';
    this.spellingMap[ 'Z' ] = 'Zulu';
    
    //Numbers
    this.spellingMap[ '0' ] = 'Zero';
    this.spellingMap[ '1' ] = 'One';
    this.spellingMap[ '2' ] = 'Two';
    this.spellingMap[ '3' ] = 'Three';
    this.spellingMap[ '4' ] = 'Four';
    this.spellingMap[ '5' ] = 'Five';
    this.spellingMap[ '6' ] = 'Six';
    this.spellingMap[ '7' ] = 'Seven';
    this.spellingMap[ '8' ] = 'Eight';
    this.spellingMap[ '9' ] = 'Nine';
    
    //Special Characters
    this.spellingMap[ ' '] = 'Space';
    this.spellingMap[ '.' ] = 'Dot';
    this.spellingMap[ ',' ] = 'Comma';
    this.spellingMap[ ';' ] = 'Semicolon';
    this.spellingMap[ ':' ] = 'Colon';
    this.spellingMap[ '?' ] = 'Question Mark';
    this.spellingMap[ '!' ] = 'Exclamation Mark';
    this.spellingMap[ '@' ] = 'At Sign';
    this.spellingMap[ '&' ] = 'Ampersand';
    this.spellingMap[ '"' ] = 'Double Quotation Mark';
    this.spellingMap[ '\'' ] = 'Apostrophe';
    this.spellingMap[ '-' ] = 'Dash';
    this.spellingMap[ '/' ] = 'Forward Slash';
    this.spellingMap[ '\\' ] = 'Backslash';
    this.spellingMap[ '(' ] = 'Left Round Bracket';
    this.spellingMap[ ')' ] = 'Right Round Bracket';
    this.spellingMap[ '[' ] = 'Left Square Bracket';
    this.spellingMap[ ']' ] = 'Right Square Bracket';
    this.spellingMap[ '{' ] = 'Left Curly Bracket';
    this.spellingMap[ '}' ] = 'Right Curly Bracket';
    this.spellingMap[ '<' ] = 'Left Angle Bracket';
    this.spellingMap[ '>' ] = 'Right Angle Bracket';
    this.spellingMap[ '|' ] = 'Vertical Bar';
    this.spellingMap[ '°' ] = 'Degree Symbol';
    this.spellingMap[ '*' ] = 'Asterisk';
    this.spellingMap[ '+' ] = 'Plus Sign';
    this.spellingMap[ '=' ] = 'Equal Sign';
    this.spellingMap[ '#' ] = 'Number Sign';
    this.spellingMap[ '§' ] = 'Section Sign';
    this.spellingMap[ '$' ] = 'Dollar Sign';
    this.spellingMap[ '€' ] = 'Euro Sign';
    this.spellingMap[ '~' ] = 'Tilde';
    this.spellingMap[ '_' ] = 'Underscore';
    this.spellingMap[ '%' ] = 'Percent Sign';
    this.spellingMap[ '^' ] = 'Caret';
  }

  public getWordFromChar(ch: string): string {
    if (ch && (ch in this.spellingMap)) {
      return this.spellingMap[ch];
    }
    return '';
  }

  public getSpellable(toSpell: string): string[] {
    let spellable: string[] = [];

    if (toSpell && toSpell.length) {
      [...toSpell.toUpperCase()].forEach(ch => spellable.push(this.getWordFromChar(ch)));
    }

    return spellable;
  }
}
