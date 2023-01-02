import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent implements OnInit {
  packages: any[] = [];
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    margin: 0,
    stagePadding: 0,
    navSpeed: 700,
    navText: ['', ''],
    mergeFit: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };

  constructor(private _packageService: PackageService) {}

  ngOnInit(): void {
    this.packages = this._packageService.getPackages();
  }
}
