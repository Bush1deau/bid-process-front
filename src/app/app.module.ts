import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import {HttpClientModule} from "@angular/common/http";
import {RegisterComponent} from "./register/register.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BidsFormComponent} from './createBid/createBid.component';
import { BidbyuserComponent } from './bidbyuser/bidbyuser.component';
import { BidsComponent } from './bids/bids.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
      BidsFormComponent,
      BidbyuserComponent,
      BidsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
