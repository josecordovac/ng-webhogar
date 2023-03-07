import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  constructor(private http: HttpClient) { }
  baseUrl = environment.API_BASE_URL;
  apiUrl = '/login';

  login(user: string, pass: string): Observable<any> {
    console.log(user, pass);
    const api = this.baseUrl + this.apiUrl;
    console.log(api);
    const form = {
      user,
      pass
    }
    return this.http.post(api, form, { observe: 'response' });
  }
}
