import { Component } from '@angular/core';
import {UtilisateurService} from "../../services/utilisateur.service";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen: boolean = true
  admin: boolean | undefined;

  constructor(public UtilisateurService : UtilisateurService, private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.toggleMenu();
    if (this.localStorageService.get('userRoleId') === "1"){
       this.admin = true;
    }
    else {
       this.admin = false;
    }
  }




  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.UtilisateurService.logout();
  }
}
