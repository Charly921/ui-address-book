import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiEmailServiceService {

  baseUrl: string = "http://localhost:8000/api/v1/emails";
  constructor(private _http: HttpClient) { }

  addEmail(email: any){
    return this._http.post<any>(this.baseUrl, email, httpOption);
  }
}
