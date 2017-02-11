import { Component } from '@angular/core';
import { Beer } from './beer/beer.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World!';
  myFavoriteBeer = new Beer('1', 'モルツ', '最高だ');
}
