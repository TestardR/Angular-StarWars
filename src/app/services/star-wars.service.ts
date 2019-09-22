import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Dark Vador', side: '' }
  ];

  private logService: LogService;
  charactersChanged = new Subject<void>();

  constructor(logService: LogService, private http: HttpClient) {
    this.logService = logService;
  }

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter(char => {
      return char.side === chosenList;
    });
  }

  fetchCharacters() {
    return this.http.get('https://swapi.co/api/people/').subscribe(data => {
      const extractedData = data['results'];
      this.characters = extractedData;
      this.charactersChanged.next();
    });
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex(char => {
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
    this.charactersChanged.next();
    this.logService.writeLog(
      'Changed side of ' + charInfo.name + ', new side: ' + charInfo.side
    );
  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex(char => {
      return char.name === name;
    });
    if (pos !== -1) {
      return;
    }
    const newChar = { name: name, side: side };
    this.characters.push(newChar);
  }
}
