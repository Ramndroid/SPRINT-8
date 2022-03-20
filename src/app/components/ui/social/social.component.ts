import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html'
})
export class SocialComponent {

  links: string[] = [
    "https://www.facebook.com/StarWars",
    "https://www.instagram.com/starwars/",
    "https://twitter.com/starwars",
    "https://www.youtube.com/user/starwars"
  ];

  // constructor() { }
}
