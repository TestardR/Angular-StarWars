import { StarWarsService } from './../../services/star-wars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    { display: 'None', value: '' },
    { display: 'Light', value: 'light' },
    { display: 'Dark', value: 'dark' }
  ];
  starWarsService: StarWarsService;

  constructor(starWarsService: StarWarsService) {
    this.starWarsService = starWarsService;
  }

  ngOnInit() {}

  onSubmit(submittedForm) {
    // work with required in the form
    if (submittedForm.invalid) {
      return;
    }
    console.log(submittedForm);
    this.starWarsService.addCharacter(
      submittedForm.value.name,
      submittedForm.value.side
    );
  }
}
