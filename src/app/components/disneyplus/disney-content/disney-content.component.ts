import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/interfaces/banner';

@Component({
  selector: 'app-disney-content',
  templateUrl: './disney-content.component.html'
})
export class DisneyContentComponent implements OnInit {

  private imgBaseURL: string = "../../../../assets/img/banner/";

  banners: Banner[] = [
    {
      imglarge: this.imgBaseURL + "boba-large.webp",
      imgsmall: this.imgBaseURL + "boba-small.webp",
      infoPosition: "right",
      logo: this.imgBaseURL + "disney-plus-logo.png",
      logoSize: 220,
      title: "the book of boba fett",
      showTitle: true,
      text: "All Episodes Now Streaming.",
      btnStreamColor: "blue",
      btnStreamLink: "https://www.disneyplus.com/es-es/series/the-book-of-boba-fett/57TL7zLNu2wf?cid=DTCI-Synergy-StarWars-Site-Awareness-Originals-US-StarWars-BookofBobaFett-EN-HomeScreenHero-Starwars_HomeScreenHero_BookofBobaFett_StreamNow_Dec29-NA",
      btnExtraText: "explore",
      btnExtraLink: "https://www.starwars.com/series/the-book-of-boba-fett"
    },
    {
      imglarge: this.imgBaseURL + "helmet-large.webp",
      imgsmall: this.imgBaseURL + "helmet-small.webp",
      infoPosition: "left",
      logo: this.imgBaseURL + "helmet-logo.webp",
      logoSize: 450,
      title: "under the helmet: the legacy of boba fett",
      showTitle: false,
      text: "A especial celebrating the origins and legacy of Star Wars' legendary bounty hunter, Boba Fett. Now streaming, only on Disney+!",
      btnStreamColor: "blue",
      btnStreamLink: "https://www.disneyplus.com/es-es/brand/star-wars?cid=DTCI-Synergy-StarWars-Site-Acquisition-DisneyPlusDay-US-StarWars-UndertheHelmetTheLegacyofBobaFett-EN-HomeScreenHero-StarWars_HomescreenHero_%20UndertheHelmetTheLegacyofBobaFett_DPLUSDAY21-NA",
      btnExtraText: "more details",
      btnExtraLink: "https://www.starwars.com/news/disney-plus-day-is-here-2021"
    },
    {
      imglarge: this.imgBaseURL + "visions-large.jpg",
      imgsmall: this.imgBaseURL + "visions-small.jpg",
      infoPosition: "right",
      logo: this.imgBaseURL + "disney-plus-logo.png",
      logoSize: 220,
      title: "star wars: visions",
      showTitle: true,
      text: "All Episodes Now Streaming!",
      btnStreamColor: "blue",
      btnStreamLink: "https://www.disneyplus.com/es-es/series/star-wars-visions/5AiiTRJ7OaKg?cid=DTCI-DTCI-StarWars-Site-Acquisition-Originals-US-StarWars-StarWarsVisions-EN-HomepageHeroCarousel-StarWars_Visions_HomepageHeroCarousel_LaunchandSustain-NA",
      btnExtraText: "",
      btnExtraLink: ""
    }
  ];

  constructor() { }
  
  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
