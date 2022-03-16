import { StarshipsService } from './../../../services/starships/starships.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent {

  constructor(
    public starshipsService: StarshipsService
  ) { }

  depurar(texto:string) {
    console.log(texto);
  }
}
