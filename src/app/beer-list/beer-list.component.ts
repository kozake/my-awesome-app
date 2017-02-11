import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer/beer.model';
import { BeerService } from '../beer/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  beers: Beer[];

  constructor(private beerService: BeerService) {
  }

  ngOnInit() {
    this.beers = this.beerService.getBeers();
  }

}
