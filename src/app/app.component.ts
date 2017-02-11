import { Component, OnInit } from '@angular/core';
import { Beer } from './beer/beer.model';
import { BeerService } from './beer/beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello World!';
  beers: Beer[];
  isNice = false;

  constructor(private beerService: BeerService) {
  }

  ngOnInit() {
    this.beers = this.beerService.getBeers();
  }

  onNice(event) {
    this.isNice = !this.isNice;
  }
}
