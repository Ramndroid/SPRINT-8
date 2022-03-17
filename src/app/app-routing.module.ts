import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { StarshipDetailComponent } from './components/starships/starship-detail/starship-detail.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'starships', component:StarshipsComponent},
  {path:'starship/:id', component:StarshipDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
