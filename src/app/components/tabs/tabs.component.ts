import { StarWarsService } from './../../services/star-wars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  characters = [];
  chosenList = 'all';
  starWarsService: StarWarsService;

  constructor(starWarsService: StarWarsService) {
    this.starWarsService = starWarsService;
  }

  ngOnInit() {}

  onChoose(side) {
    this.chosenList = side;
  }

  getCharacters() {
    this.characters = this.starWarsService.getCharacters(this.chosenList);
    return this.characters;
  }
}
