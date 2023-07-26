import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import {HttpClientModule} from "@angular/common/http";
import { TCPartsCountryBidProductCategoriesComponent } from './tcparts-country-bid-product-categories/tcparts-country-bid-product-categories.component';
import {RegisterComponent} from "./register/register.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    TCPartsCountryBidProductCategoriesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
