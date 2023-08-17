import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Bid} from "../models/Bid.model";
import {Country} from "../models/Country.model";


@Injectable({
  providedIn: 'root',
})
export class BidsService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  createBid(bid: any): Observable<Bid> {
    return this.http.post<Bid>(this.apiUrl + '/bid/create', bid);
  }
  getAllBids(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/bids');
  }



  getBidsByUserId(userId: number): Observable<any[]> {
    const url = `${this.apiUrl}/bid/user_id/${userId}`;
    return this.http.get<any[]>(url);
  }




  updateBidStatus(bidId: number, newStatus: string): Observable<any> {
    const url = `${this.apiUrl}/${bidId}/update-status`;
    const updatedData = newStatus;
    return this.http.put(url, updatedData);
  }

  deleteBid(bidId: number | undefined): Observable<void> {
    const url = `${this.apiUrl}/bid/delete/${bidId}`;
    return this.http.delete<void>(url);
  }

}
