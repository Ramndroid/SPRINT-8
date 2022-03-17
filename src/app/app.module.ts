import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StarshipsListComponent } from './components/starships/starships-list/starships-list.component';

import { ApiService } from './services/api/api.service';
import { StarshipsService } from './services/starships/starships.service';
import { NavBarComponent } from './components/ui/nav-bar/nav-bar.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { StarshipDetailComponent } from './components/starships/starship-detail/starship-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarshipsListComponent,
    NavBarComponent,
    StarshipsComponent,
    StarshipDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule    
  ],
  providers: [
    ApiService,
    StarshipsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
