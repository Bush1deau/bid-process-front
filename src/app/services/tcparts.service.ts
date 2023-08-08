import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TCParts} from "../models/TCParts.model";

@Injectable({
  providedIn: 'root'
})
export class TCPartsService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  getAllTCParts(): Observable<TCParts[]> {
    return this.http.get<TCParts[]>(this.apiUrl + '/tCPartss');
  }
}
