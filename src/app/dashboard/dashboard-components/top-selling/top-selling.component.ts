import { Component, OnInit } from '@angular/core';
import {Product,TopSelling} from './top-selling-data';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-top-selling',
    templateUrl: './top-selling.component.html',
    standalone: true,
    imports: [NgFor]
})
export class TopSellingComponent implements OnInit {

  topSelling:Product[];

  constructor() { 

    this.topSelling=TopSelling;
  }

  ngOnInit(): void {
  }

}
