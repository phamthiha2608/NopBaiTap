import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  
  getAllProduct() {
    return this.http.get('assets/guitar.json');
  }
  getAllCategories() {
    return this.http.get('assets/categories.json');
  }
}
