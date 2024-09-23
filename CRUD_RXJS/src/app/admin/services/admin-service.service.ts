import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  public USER_URL = 'http://localhost:3000/user';

  constructor(private _apiService: ApiService) {}

  getAllUser(): Observable<any> {
    return this._apiService.get(this.USER_URL);
  }

  registerUser(body_params: object): Observable<any> {
    return this._apiService.post(this.USER_URL, body_params);
  }

  updateUser(body_params: object): Observable<any> {
    return this._apiService.put(this.USER_URL, body_params);
  }

  deleteUser(id: number) {
    return this._apiService.delete(this.USER_URL + '/' + id);
  }
}
