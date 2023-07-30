import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Router } from "@angular/router";
import { Utilisateur } from '../models/Utilisateur';


const apiUrl = 'http://localhost:8080';

@Injectable({ providedIn: 'root' })
export class UtilisateurService {
  constructor(private _http: HttpClient, public router:Router) { }


  register(register:any) {
    return this._http.post<Utilisateur>(apiUrl + `/user/create`, register);
  }

  login(email: string, password: string) {
    const params = {email, password};
    return this._http.post<Utilisateur>(apiUrl + '/login', params);
  }




  //login(email:any, password:any){
  //  let params = new HttpParams().set('email', email).set('password', password)
  //  return this._http.post<Utilisateur>(apiUrl+'/login', params , {'headers': headers})
  //}



}
