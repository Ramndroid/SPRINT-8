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
import { StarshipDetailComponent } from './pages/starship-detail/starship-detail.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FooterComponent } from './components/ui/footer/footer.component';
import { SocialComponent } from './components/ui/social/social.component';
import { FooterNavComponent } from './components/ui/footer-nav/footer-nav.component';
import { NavBarTabsComponent } from './components/ui/nav-bar-tabs/nav-bar-tabs.component';
import { NavBarLoginComponent } from './components/ui/nav-bar-login/nav-bar-login.component';
import { SubpageComponent } from './components/ui/subpage/subpage.component';
import { NavBarBrandComponent } from './components/ui/nav-bar-brand/nav-bar-brand.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarshipsListComponent,
    NavBarComponent,
    StarshipsComponent,
    StarshipDetailComponent,
    FooterComponent,
    SocialComponent,
    FooterNavComponent,
    NavBarTabsComponent,
    NavBarLoginComponent,
    SubpageComponent,
    NavBarBrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [
    ApiService,
    StarshipsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
