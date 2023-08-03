import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import {
  TCPartsCountryBidProductCategoriesComponent
} from "./tcparts-country-bid-product-categories/tcparts-country-bid-product-categories.component";
import {RegisterComponent} from "./register/register.component";
import { LoginComponent } from './login/login/login.component';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: 'countries', component: CountryComponent },
  { path: 'bids', component: TCPartsCountryBidProductCategoriesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
