import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private baseUrl = 'https://methotels-14ec3-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(`${this.baseUrl}/smestaji.json`);
  }

  addItem(item: any) {
    return this.http.post(`${this.baseUrl}/smestaji.json`, item);
  }

  deleteItem(itemId: string) {
    return this.http.delete(`${this.baseUrl}/smestaji/${itemId}.json`);
  }
  
  updateItem(itemId: string, updatedItem: any) {
    return this.http.put(`${this.baseUrl}/smestaji/${itemId}.json`, updatedItem);
  }
  
}
