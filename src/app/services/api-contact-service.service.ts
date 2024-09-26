import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiContactServiceService {

  baseUrl: string = "http://localhost:8000/api/v1/contacts";
  constructor(private _http: HttpClient) { }

  getAllContacts() {
    return this._http.get<any>(this.baseUrl);
  }

  getContact(id: number){
    return this._http.get<any>(`${this.baseUrl}/${id}`);
  }

  getContactDetails(id: number){
    return this._http.get<any>(`${this.baseUrl}/contact-details/${id}`);
  }

  updateContact(contact: Contact){
    return this._http.put<any>(`${this.baseUrl}/${contact.id}`, contact, httpOption);
  }

  addContact(contact: Contact){
    return this._http.post<any>(this.baseUrl, contact, httpOption);
  }

  deleteContact(id: number){
    return this._http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
