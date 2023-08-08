import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Router } from "@angular/router";
import { Utilisateur } from '../models/Utilisateur';


const apiUrl = 'http://localhost:8080';


@Injectable({ providedIn: 'root' })
export class UtilisateurService {

  public logged = false;

  constructor(private _http: HttpClient, public router:Router) { }


  register(register:any) {
    return this._http.post<Utilisateur>(apiUrl + `/user/create`, register);
  }

  login(email: string, password: string) {
    console.log(email, password)
    this.logged = true;
    const credential = {email, password};
    return this._http.post<Utilisateur>(`${apiUrl}/login`, credential);
  }

  logout(){
    this.logged = false;
    this.router.navigate(['/login'])
  }

  isLoggedIn(): boolean {
    return this.logged;
  }


}
