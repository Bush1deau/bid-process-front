import { Component } from '@angular/core';
import {UtilisateurService} from "../../services/utilisateur.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen: boolean = true

  constructor(public UtilisateurService : UtilisateurService) { }

  ngOnInit(): void {
    this.toggleMenu();
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.UtilisateurService.logout();
  }
}
