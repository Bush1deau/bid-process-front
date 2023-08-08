import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import {
  TCPartsCountryBidProductCategoriesComponent
} from "./tcparts-country-bid-product-categories/tcparts-country-bid-product-categories.component";
import {RegisterComponent} from "./register/register.component";
import { LoginComponent } from './login/login/login.component';
import {HomeComponent} from "./home/home.component";
import {NavbarComponent} from "./layout/navbar/navbar.component";
import {AuthguardService} from "./services/authguard.service";

const routes: Routes = [
  { path: 'bids', component: TCPartsCountryBidProductCategoriesComponent , canActivate: [AuthguardService]},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent , canActivate: [AuthguardService]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
