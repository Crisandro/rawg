import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameApiService {
  private readonly baseUrl = 'https://api.rawg.io/api';
  private readonly key = '?key=d23b5f0a0e4f4a06bf9830393cd55aea'

  constructor(private http: HttpClient) { }

  getGameList(page: number, page_size: number): Observable<any> {
    const url = `${this.baseUrl}/games${this.key}&page=${page}&page_size=${page_size}`;
    console.log(url)
    return this.http.get<any>(url);
  }

  getGameDetails(id: number): Observable<any> {
    const url = `${this.baseUrl}/games/${id}${this.key}`;
    console.log(url)
    return this.http.get<any>(url);
  }

  getGameMovies(id: number): Observable<any> {
    const url = `${this.baseUrl}/games/${id}/movies${this.key}`;
    console.log(url)
    return this.http.get<any>(url);
  }
}
