import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../services/alert.service';
import { UtilisateurService } from '../services/utilisateur.service';
import {Role} from "../models/Role.model";

@Component({ templateUrl: 'register.component.html', selector: 'app-register' })
export class RegisterComponent implements OnInit {
    loading = false;
    submitted = false;
    firstName : string = "";
    lastName: string = "";
    email: string = "";
    password: string = "";
    role: Role[] = [];
    roleId: number = 2;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private _utilisateurService: UtilisateurService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
    }

    ngOnInit() {

    }
    registerUser(){
      this.firstName = (document.getElementById("firstName")as HTMLInputElement).value;
      this.lastName = (document.getElementById("lastName")as HTMLInputElement).value;
      this.email = (document.getElementById("email")as HTMLInputElement).value;
      this.password = (document.getElementById("password")as HTMLInputElement).value;
      this.roleId = 2;
      let register = {
        firstName : this.firstName,
        lastName : this.lastName,
        email : this.email,
        password : this.password,
        role : {
          id : this.roleId,
        }
      }

      this.loading = true;

      this._utilisateurService.register(register).pipe(first()).subscribe(
          date => {
            this.loading = false;
            this.router.navigate(['/login']);
          },
          error => {
            this.loading = false;
          });

    }
    // convenience getter for easy access to form fields

    onSubmit() {

    }
}
