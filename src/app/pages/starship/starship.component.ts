import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html'
})
export class StarshipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
