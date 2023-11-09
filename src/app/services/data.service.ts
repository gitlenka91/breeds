import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Breed, BreedDetail } from '../models/breed.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  AUTHORIZATION_KEY = 'live_SuYPHKLerg5vyOCBxpw08WTn8UWjmClTAyDquG1l3MV3uhuXMXcKAn51T4Un2Q0m';
  API_URL = 'https://api.thedogapi.com/v1';

  httpHeaders = new HttpHeaders({
    authorization: this.AUTHORIZATION_KEY,
  });

  constructor(private http: HttpClient) {}
  
  getBreeds(limit: number): Observable<Breed[]> {
    return this.http.get<Breed[]>(`${this.API_URL}/breeds?limit=${limit}`, { headers: this.httpHeaders }).pipe((res) => {
      return res;
    });
  }

  getBreedDetails(id: string): Observable<BreedDetail> {
    return this.http.get<BreedDetail>(`${this.API_URL}/images/${id}`, { headers: this.httpHeaders }).pipe((res) => {
      return res;
    });
  }
}
