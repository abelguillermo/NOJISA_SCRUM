import { Component, OnInit } from '@angular/core';
import {topcard,topcards} from './top-cards-data';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-top-cards',
    templateUrl: './top-cards.component.html',
    standalone: true,
    imports: [NgFor]
})
export class TopCardsComponent implements OnInit {

  topcards:topcard[];

  constructor() { 

    this.topcards=topcards;
  }

  ngOnInit(): void {
  }

}
