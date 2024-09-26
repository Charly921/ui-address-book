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
export class ApiPhoneServiceService {

  baseUrl: string = "http://localhost:8000/api/v1/phones";
  constructor(private _http: HttpClient) { }

  addPhone(phone: any){ console.log(phone)
    return this._http.post<any>(this.baseUrl, phone, httpOption);
  }
}
