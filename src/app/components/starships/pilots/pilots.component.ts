import { Component, Input } from '@angular/core';
import { People } from 'src/app/interfaces/people';
import { StarshipsService } from 'src/app/services/starships/starships.service';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html'
})
export class PilotsComponent {

  @Input() pilots: People[];

  idPilot: string;

  isImgLoading: boolean;

  constructor(
    private starshipsService: StarshipsService,
  ) {
    this.pilots = [];
    this.idPilot = "0";
    this.isImgLoading = true;
  }

  getPilotID(url: string): string {
    return this.starshipsService.extractPilotID(url);
  }

  onImageLoaded() {
    this.isImgLoading = false;
  }

}
