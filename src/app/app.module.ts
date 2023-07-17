import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TCPartsCountryBidProductCategoryComponent } from './bid/components/tcparts-country-bid-product-category/tcparts-country-bid-product-category.component';
import { ViewTCPartsCountryBidProductCategoryComponent } from './bid/containers/view-tcparts-country-bid-product-category/view-tcparts-country-bid-product-category.component';

@NgModule({
  declarations: [
    AppComponent,
    TCPartsCountryBidProductCategoryComponent,
    ViewTCPartsCountryBidProductCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
