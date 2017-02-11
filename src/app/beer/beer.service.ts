import { Injectable } from '@angular/core';
import { Beer } from './beer.model';

@Injectable()
export class BeerService {

  beers: Beer[] = [
        new Beer('0', 'モルツ', '最高だ')
      , new Beer('1', 'キリン', '幸せだ')
      , new Beer('2', 'ドライ', '花金だ')
      ];

  constructor() { }

  getBeers(): Beer[] {
    return this.beers;
  }
}
