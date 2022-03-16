import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StarshipsComponent } from './pages/starships/starships.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'starships', component:StarshipsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
