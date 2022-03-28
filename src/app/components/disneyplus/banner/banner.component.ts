import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Banner } from 'src/app/interfaces/banner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html'
})
export class BannerComponent implements OnInit {

  @Input() banners: Banner[] = [];

  public innerWidth: number;

  constructor() {
    this.innerWidth = 0;
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }

}
