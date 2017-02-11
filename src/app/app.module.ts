import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BeerModule } from './beer/beer.module';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directive/highlight.directive';
import { UpperPipe } from './pipe/upper.pipe';
import { HomeComponent } from './home/home.component';
import { BeerListComponent } from './beer-list/beer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UpperPipe,
    HomeComponent,
    BeerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BeerModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
