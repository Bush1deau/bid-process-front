import { Component } from '@angular/core';
import { UtilisateurService } from "../../services/utilisateur.service";
import { Router } from "@angular/router";
import { Utilisateur } from '../../models/Utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading = false;
  email: string = "";
  password: string = "";

  constructor(private _utilisateurService: UtilisateurService, private router: Router) { }

  loginForm() {
    this.loading = true;

    this._utilisateurService.login(this.email, this.password).subscribe(
      (user: Utilisateur) => {
        if (user) {
          console.log("Connecté avec succès", user);
          this.loading = false;
          this.router.navigate(['/bids']);
        } else {
          console.log("Échec de connexion");
          this.loading = false;
          alert("Identifiants incorrects");
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
