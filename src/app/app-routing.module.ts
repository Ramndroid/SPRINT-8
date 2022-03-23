import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { UserGuard } from './user.guard';
import { StarshipInfoComponent } from './components/starships/starship-info/starship-info.component';

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
    component: StarshipInfoComponent,
    canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
