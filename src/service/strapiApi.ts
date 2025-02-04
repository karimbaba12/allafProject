// src/app/strapi.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StrapiService {
  private apiUrl = 'https://dashboard.hasco-intl.com.au/api';

  constructor(private http: HttpClient) {}

  getDataAustralia(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Images?populate=*`).pipe(
      map((response) => {
        return response.data.map((item: any) => {
          const images = Array.isArray(item.Image)
            ? item.Image.map((img: any) =>
                img.url ? `https://dashboard.hasco-intl.com.au${img.url}` : ''
              ).filter((url: any) => url !== '') // Remove empty URLs
            : [];

          return {
            Title: item.Title || 'No Title',
            Description: item.Description || 'No Description',
            publishedAt: item.publishedAt || null,
            images,
          };
        });
      })
    );
  }
  getDataLebanon(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Lebanons?populate=*`).pipe(
      map((response) => {
        return response.data.map((item: any) => {
          // Ensure Images exists and is an array
          const images =
            item.Images && Array.isArray(item.Images)
              ? item.Images.map((img: any) =>
                  img.url ? `https://dashboard.hasco-intl.com.au${img.url}` : ''
                ).filter((url: any) => url !== '') // Filter out any empty URLs
              : []; // Fallback to an empty array if Images is not present or not an array

          return {
            Title: item.Title || 'No Title',
            Description: item.Description || 'No Description',
            publishedAt: item.publishedAt || null,
            images,
          };
        });
      })
    );
  }

  getDataQatar(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/qatars?populate=*`).pipe(
      map((response) => {
        return response.data.map((item: any) => {
          // Ensure Images exists and is an array
          const images =
            item.Images && Array.isArray(item.Images)
              ? item.Images.map((img: any) =>
                  img.url ? `https://dashboard.hasco-intl.com.au${img.url}` : ''
                ).filter((url: any) => url !== '') // Filter out any empty URLs
              : []; // Fallback to an empty array if Images is not present or not an array

          return {
            Title: item.Title || 'No Title',
            Description: item.Description || 'No Description',
            publishedAt: item.publishedAt || null,
            images,
          };
        });
      })
    );
  }
  getDataKuwait(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/kuwaits?populate=*`).pipe(
      map((response) => {
        return response.data.map((item: any) => {
          // Ensure Images exists and is an array
          const images =
            item.Images && Array.isArray(item.Images)
              ? item.Images.map((img: any) =>
                  img.url ? `https://dashboard.hasco-intl.com.au${img.url}` : ''
                ).filter((url: any) => url !== '') // Filter out any empty URLs
              : []; // Fallback to an empty array if Images is not present or not an array

          return {
            Title: item.Title || 'No Title',
            Description: item.Description || 'No Description',
            publishedAt: item.publishedAt || null,
            images,
          };
        });
      })
    );
  }
  getDataGhana(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/ghanas?populate=*`).pipe(
      map((response) => {
        return response.data.map((item: any) => {
          // Ensure Images exists and is an array
          const images =
            item.Images && Array.isArray(item.Images)
              ? item.Images.map((img: any) =>
                  img.url ? `https://dashboard.hasco-intl.com.au${img.url}` : ''
                ).filter((url: any) => url !== '') // Filter out any empty URLs
              : []; // Fallback to an empty array if Images is not present or not an array

          return {
            Title: item.Title || 'No Title',
            Description: item.Description || 'No Description',
            publishedAt: item.publishedAt || null,
            images,
          };
        });
      })
    );
  }
  getDataNairobi(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/nairobis?populate=*`).pipe(
      map((response) => {
        return response.data.map((item: any) => {
          // Ensure Images exists and is an array
          const images =
            item.Images && Array.isArray(item.Images)
              ? item.Images.map((img: any) =>
                  img.url ? `https://dashboard.hasco-intl.com.au${img.url}` : ''
                ).filter((url: any) => url !== '') // Filter out any empty URLs
              : []; // Fallback to an empty array if Images is not present or not an array

          return {
            Title: item.Title || 'No Title',
            Description: item.Description || 'No Description',
            publishedAt: item.publishedAt || null,
            images,
          };
        });
      })
    );
  }
}
