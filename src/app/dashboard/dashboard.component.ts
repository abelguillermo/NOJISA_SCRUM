import { Component, AfterViewInit } from '@angular/core';
import { BlogCardsComponent } from './dashboard-components/blog-cards/blog-cards.component';
import { TopSellingComponent } from './dashboard-components/top-selling/top-selling.component';
import { FeedsComponent } from './dashboard-components/feeds/feeds.component';
import { SalesRatioComponent } from './dashboard-components/sales-ratio/sales-ratio.component';
import { TopCardsComponent } from './dashboard-components/top-cards/top-cards.component';
//declare var require: any;

@Component({
    templateUrl: './dashboard.component.html',
    standalone: true,
    imports: [TopCardsComponent, SalesRatioComponent, FeedsComponent, TopSellingComponent, BlogCardsComponent]
})
export class DashboardComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }

  ngAfterViewInit() { }
}
