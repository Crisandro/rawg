import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAllGames, iGameApi, Iscreenshots } from './game-api'

@Injectable({
  providedIn: 'root'
})
export class GameApiService {
  private readonly serverUrl = 'https://rawg-server-ecw5.onrender.com/';
  private readonly baseUrl = 'https://api.rawg.io/api';
  private readonly key = '?key=d23b5f0a0e4f4a06bf9830393cd55aea'

  constructor(private http: HttpClient) { }

  getGameList(page: number, page_size: number): Observable<IAllGames> {
    const getFromUrl = `${this.serverUrl}getAllGames?page_size=${page_size}&page=${page}`;
    // const url = `${this.baseUrl}/games${this.key}&page=${page}&page_size=${page_size}`;
    console.log(getFromUrl)
    return this.http.get<IAllGames>(getFromUrl);
  }

  getGameDetails(id: number): Observable<iGameApi> {
    const getFromUrl = `${this.serverUrl}getDetails?id=${id}`;
    // const url = `${this.baseUrl}/games/${id}${this.key}`;
    console.log(getFromUrl)
    return this.http.get<iGameApi>(getFromUrl);
  }

  getGameMovies(id: number): Observable<IAllGames> {
    const url = `${this.baseUrl}/games/${id}/screenshots${this.key}`;
    console.log(url)
    return this.http.get<IAllGames>(url);
  }
}
