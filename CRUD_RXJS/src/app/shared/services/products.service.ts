import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  PRODUCTS_URL = 'http://localhost:3000/products';
  constructor(private _apiService: ApiService) {}

  getAllProduct(): Observable<any> {
    return this._apiService.get(this.PRODUCTS_URL);
  }

  getProductById(id: number): Observable<any> {
    return this._apiService.get(this.PRODUCTS_URL + '/' + id);
  }
  deleteProduct(id: number): Observable<any> {
    return this._apiService.delete(this.PRODUCTS_URL + '/' + id);
  }
  addNewProduct(id: number, product_body: object): Observable<any> {
    return this._apiService.post(this.PRODUCTS_URL + '/' + id, product_body);
  }
  updateProduct(id: number, product_body: object): Observable<any> {
    return this._apiService.put(this.PRODUCTS_URL + '/' + id, product_body);
  }
}
