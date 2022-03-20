import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  followUs: string = "follow star wars:";

  allRights: string = "TM & © Lucasfilm Ltd. All Rights Reserved";

  constructor() { }

}
