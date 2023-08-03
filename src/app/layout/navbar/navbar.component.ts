import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen: boolean = true

  constructor() { }

  ngOnInit(): void {
    this.toggleMenu();
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
