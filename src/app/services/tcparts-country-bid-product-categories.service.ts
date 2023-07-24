import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TCPartsCountryBidProductCategory} from "../models/TCPartsCountryBidProductCategory.model";

@Injectable({
  providedIn: 'root'
})
export class TCPartsCountryBidProductCategoryService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllTCPartsCountryBidProductCategory(): Observable<TCPartsCountryBidProductCategory[]> {
    return this.http.get<TCPartsCountryBidProductCategory[]>(this.apiUrl + '/tCPartsCountryBidProductCategories');
  }
}
