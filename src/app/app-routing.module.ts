import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import { LoginComponent } from './login/login/login.component';
import {HomeComponent} from "./home/home.component";
import {NavbarComponent} from "./layout/navbar/navbar.component";
import {AuthguardService} from "./services/authguard.service";
import {BidsFormComponent} from "./bid/bid.component";

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent , canActivate: [AuthguardService]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent },
  { path: 'bid', component: BidsFormComponent , canActivate: [AuthguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
