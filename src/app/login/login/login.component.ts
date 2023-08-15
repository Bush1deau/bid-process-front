import {Component, OnInit} from '@angular/core';
import { UtilisateurService } from "../../services/utilisateur.service";
import { Router } from "@angular/router";
import { Utilisateur } from '../../models/Utilisateur';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm : FormGroup | any;
  loading = false;

  constructor(private _utilisateurService: UtilisateurService, private router: Router, private localStorageService:LocalStorageService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(1)]]
    });
  }
  login() {
    this.loading = true;
    this._utilisateurService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      (user: Utilisateur) => {
        if (user) {
          this.localStorageService.set('userId', JSON.stringify(user.id))
          this.localStorageService.set('userRoleId', JSON.stringify(user.role?.id))
          this.localStorageService.set('userFirstName', JSON.stringify(user.firstName))
          this.localStorageService.set('userLastName', JSON.stringify(user.lastName))
          console.log("Connecté avec succès", user);
          this.loading = false;
          this.router.navigate(['/home']);
        } else {
          console.log("Échec de connexion");
          this.loading = false;
        }
      },
      (error) => {
        console.error("Erreur de connexion :", error);
        this.loading = false;
        alert("Une erreur est survenue lors de la connexion.");
      }
    );
  }
}
