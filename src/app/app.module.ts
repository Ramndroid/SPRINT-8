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
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FooterComponent } from './components/ui/footer/footer.component';
import { SocialComponent } from './components/ui/social/social.component';
import { FooterNavComponent } from './components/ui/footer-nav/footer-nav.component';
import { NavBarTabsComponent } from './components/ui/nav-bar-tabs/nav-bar-tabs.component';
import { NavBarLoginComponent } from './components/ui/nav-bar-login/nav-bar-login.component';
import { SubpageComponent } from './components/ui/subpage/subpage.component';
import { NavBarBrandComponent } from './components/ui/nav-bar-brand/nav-bar-brand.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { UserDialogComponent } from './components/dialogs/user-dialog/user-dialog.component';
import { StorageService } from './services/storage/storage.service';
import { UsersService } from './services/users/users.service';
import { StarshipComponent } from './pages/starship/starship.component';
import { OpeningComponent } from './components/opening/opening.component';
import { StarshipInfoComponent } from './components/starships/starship-info/starship-info.component';
import { LogDialogComponent } from './components/dialogs/log-dialog/log-dialog.component';
import { PilotsComponent } from './components/starships/pilots/pilots.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarshipsListComponent,
    NavBarComponent,
    StarshipsComponent,
    FooterComponent,
    SocialComponent,
    FooterNavComponent,
    NavBarTabsComponent,
    NavBarLoginComponent,
    SubpageComponent,
    NavBarBrandComponent,
    UserDialogComponent,
    StarshipComponent,
    OpeningComponent,
    StarshipInfoComponent,
    LogDialogComponent,
    PilotsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule    
  ],
  providers: [
    ApiService,
    StarshipsService,
    StorageService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
