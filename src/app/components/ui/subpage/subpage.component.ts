import { Component } from '@angular/core';

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.component.html'
})
export class SubpageComponent {

  claim: string;

  link: string = "https://www.disneyplus.com/es-es/brand/star-wars?cid=DTCI-Synergy-StarWars-Site-Acquisition-Library-US-StarWars-NA-EN-NavPipe-StarWars_NavPipe_StarWarsStreamingAnytimeonDisneyPlus_Evergreen-NA";

  constructor() {
    this.claim = "";
    if (Math.random() < 0.5) {
      this.claim = "all of your star wars favorites now streaming on disney+";
    } else {
      this.claim = "stream star wars on disney+";
    }
  }

}
