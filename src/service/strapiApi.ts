// src/app/strapi.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StrapiService {
  private apiUrl = 'http://dashboard.hasco-intl.com.au/api';

  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Images?populate=*`).pipe(
      map((response) => {
        console.log(response); // Check the API response structure
        response.data.forEach((item: any) => {
          if (item.Image) {
            item.Image.url = `http://dashboard.hasco-intl.com.au/${item.Image.url}`; // Add base URL if missing
          }
        });
        return response;
      })
    );
  }
}
