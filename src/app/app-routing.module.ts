import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { UserGuard } from './user.guard';
import { StarshipInfoComponent } from './components/starships/starship-info/starship-info.component';
import { FilmsComponent } from './pages/films/films.component';
import { DisneyComponent } from './pages/disney/disney.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {animation: 'home'}
  },
  {
    path: 'films',
    component: FilmsComponent,
    canActivate: [UserGuard],
    data: {animation: 'films'}
  },
  {
    path: 'starships',
    component: StarshipsComponent,
    canActivate: [UserGuard],
    data: {animation: 'starships'}
  },
  {
    path: 'starship/:id',
    component: StarshipInfoComponent,
    canActivate: [UserGuard],
    data: {animation: 'starship'}
  },
  {
    path: 'disneyplus',
    component: DisneyComponent,
    canActivate: [UserGuard],
    data: {animation: 'disneyplus'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
