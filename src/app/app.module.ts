import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { HighlightDirective } from './directive/highlight.directive';
import { UpperPipe } from './pipe/upper.pipe';

import { BeerService } from './beer/beer.service';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    HighlightDirective,
    UpperPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BeerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
