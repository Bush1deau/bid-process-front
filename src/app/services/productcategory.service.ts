import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TCParts} from "../models/TCParts.model";
import {ProductCategory} from "../models/ProductCategory.model";

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  getAllProductCategory(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.apiUrl + '/productCategories');
  }
}
