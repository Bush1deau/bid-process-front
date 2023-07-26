import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { Utilisateur } from '../models/Utilisateur';


const apiUrl = 'http://localhost:8080';
const headers = new HttpHeaders({
  'Content-type':'application/json',
  'Access-Control-Allow-Origin': '*'
})
@Injectable({ providedIn: 'root' })
export class UtilisateurService {
  constructor(private _http: HttpClient, public router:Router) { }


  register(register:any) {
    return this._http.post<Utilisateur>(apiUrl + `/user/create`, register, {'headers': headers});
  }

}
