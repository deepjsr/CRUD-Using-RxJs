import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  ORDER_URL = 'http://localhost:3000/orders';
  constructor(private _apiService: ApiService) {}

  getAllProduct(): Observable<any> {
    return this._apiService.get(this.ORDER_URL);
  }

  getProductById(id: number): Observable<any> {
    return this._apiService.get(this.ORDER_URL + '/' + id);
  }
  deleteProduct(id: number): Observable<any> {
    return this._apiService.delete(this.ORDER_URL + '/' + id);
  }
  addNewProduct(product_body: any) {
    return this._apiService.post(this.ORDER_URL, product_body);
  }
  updateProduct(id: number, product_body: object): Observable<any> {
    return this._apiService.put(this.ORDER_URL + '/' + id, product_body);
  }
}
