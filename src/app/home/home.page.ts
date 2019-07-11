import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public complexProp = {
    name: 'Hellop',
    age: 15,
    presence: true
  };
  constructor() {}

}
