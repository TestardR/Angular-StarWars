import { StarWarsService } from './../../services/star-wars.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() character;
  starWarsService: StarWarsService;

  constructor(starWarsService: StarWarsService) {
    this.starWarsService = starWarsService;
  }

  ngOnInit() {}

  onAssign(side) {
    this.starWarsService.onSideChosen({
      name: this.character.name,
      side: side
    });
  }
}
