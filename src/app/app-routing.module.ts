import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { StarshipDetailComponent } from './pages/starship-detail/starship-detail.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'starships',
    component: StarshipsComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'starship/:id',
    component: StarshipDetailComponent,
    canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
