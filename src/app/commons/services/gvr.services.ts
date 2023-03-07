import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root'
})
export class GvrApiService {
    constructor(private http: HttpClient) { }
    baseUrl = environment.API_BASE_URL;
    apiUrl = '/customerordermanagement/orderservices/v1/types';

    getGvr(movilNumber: string): Observable<any> {
        const _headers = new HttpHeaders({
            'Request-ID': '550e8400-e29b-41d4-a716-446655440000',
            'request-date': '2017-06-01T17:15:20.509-0400'
        });
        const api = this.baseUrl + this.apiUrl + '/' + movilNumber;
        console.log(api);
        return this.http.get(api, { headers: _headers, observe: 'response' });
    }
}
