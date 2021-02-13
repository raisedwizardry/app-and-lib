import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SayingHelloModule } from '@saying-hello';
import { IntroductionModule } from '@introduction';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SayingHelloModule,
    IntroductionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
