import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BeerModule } from './beer/beer.module';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directive/highlight.directive';
import { UpperPipe } from './pipe/upper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UpperPipe
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
