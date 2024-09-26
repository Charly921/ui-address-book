import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../models/address';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiAddressServiceService {

  baseUrl: string = "http://localhost:8000/api/v1/addresses";
  constructor(private _http: HttpClient) { }

  addAddress(address: Address){
    return this._http.post<any>(this.baseUrl, address, httpOption);
  }
}
