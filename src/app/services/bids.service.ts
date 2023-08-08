import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Bid} from "../models/Bid.model";


@Injectable({
  providedIn: 'root',
})
export class BidsService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  createBid(bid: any): Observable<Bid> {
    return this.http.post<Bid>(this.apiUrl + '/bid/create', bid);
  }
}
