import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'apps/frontend/src/environments/environment';

export interface UserStats {
  username: string;
  totalArticles: number;
  totalFavorites: number;
  firstArticleDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class RosterService {

  private apiUrl = `${environment.api_url}/roster`;

  constructor(private http: HttpClient) { }

  getUserStats(): Observable<UserStats[]> {
    return this.http.get<UserStats[]>(this.apiUrl);
  }
}