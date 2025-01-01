// src/app/strapi.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StrapiService {
  private apiUrl = 'http://localhost:1337/api';

  constructor(private http: HttpClient) {}

  // getData(): Observable<any> {
  //   console.log('Fetching data from:', `${this.apiUrl}/Images`);
  //   return this.http.get<any>(`${this.apiUrl}/Images`);
  // }
  // getData(): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/Images?populate=*`).pipe(
  //     map((response) => {
  //       response.data.forEach((item: any) => {
  //         item.imageUrl = item.imageUrl || 'path/to/default-image.jpg'; // Default image
  //       });
  //       return response;
  //     })
  //   );
  // }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Images?populate=*`).pipe(
      map((response) => {
        console.log(response); // Check the API response structure
        response.data.forEach((item: any) => {
          if (item.Image) {
            item.Image.url = `http://localhost:1337${item.Image.url}`; // Add base URL if missing
          }
        });
        return response;
      })
    );
  }
}
