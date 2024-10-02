import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StrapiService {
  private apiUrl = 'http://localhost:1337/api'; // Replace with your Strapi URL

  constructor(private http: HttpClient) { }

  // Fetch all products (example content type)
  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`);
  }

  // Fetch a specific product by ID
  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/${id}`);
  }
}
