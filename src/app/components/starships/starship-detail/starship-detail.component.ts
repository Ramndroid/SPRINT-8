import { StarshipsService } from './../../../services/starships/starships.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Starship } from '../../../interfaces/starship';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss']
})
export class StarshipDetailComponent implements OnInit {

  id: string = "";

  constructor(
    private starshipsService: StarshipsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.starshipsService.getStarshipByID(this.id);
  }

  getStarship(): Starship {
    return this.starshipsService.starship;
  }

  getDescription(): string {
    return this.starshipsService.description;
  }

  goBack(): void {
    this.starshipsService.goBack();
    // TODO: implementar que se pueda recuperar el scroll que estaba antes de hacer click
    this.router.navigate(['starships']);
  }

}
