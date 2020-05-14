import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {

  private apiKey = '31f68e5611ce4049b813d698a242e52c';
  private url = 'http://newsapi.org/v2/top-headlines';

  constructor(private http: HttpClient) { }

  private getDefaultURL(): string {
    return this.url + '?apiKey=' + this.apiKey;
  }

  getLastNews(country: string, page: number = 0, pageSize: number = 10) {
    const url: string = this.getDefaultURL() + '&country=' + country + '&page=' + page + '&pageSize=' + pageSize;
    return this.http.get(url);
  }

  getResearch(query: string, country: string, page: number = 0, pageSize: number = 10) {
    const url: string = this.getDefaultURL() + '&query=' + query  + '&country=' + country + '&page=' + page + '&pageSize=' + pageSize;
    return this.http.get(url);
  }
}
