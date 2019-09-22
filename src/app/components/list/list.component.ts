import { StarWarsService } from './../../services/star-wars.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  characters = [];
  activatedRoute: ActivatedRoute;
  starWarsService: StarWarsService;
  loadedSide = 'all';
  subscription: Subscription;

  constructor(
    activatedRoute: ActivatedRoute,
    starWarsService: StarWarsService
  ) {
    this.activatedRoute = activatedRoute;
    this.starWarsService = starWarsService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.characters = this.starWarsService.getCharacters(params.side);
      this.loadedSide = params.side;
    });
    this.subscription = this.starWarsService.charactersChanged.subscribe(() => {
      this.characters = this.starWarsService.getCharacters(this.loadedSide);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
