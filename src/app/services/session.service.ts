import { Injectable } from '@angular/core';
import { unmarshallerNews, News } from '../models/news.model';
import { HttpConfigService } from './http-config.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  totalResults = 0;
  lastNews: News[] = [];

  country = 'fr';
  progressQuery = false;
  haveError = false;

  constructor(private httpConfigService: HttpConfigService) {}

  getAllNews(page: number, pageSize: number) {
    this.progressQuery = true;
    this.httpConfigService.getLastNews(this.country, page, pageSize).pipe(
      catchError((error) => {
        return this.handleError(error);
      })
    ).subscribe(
      (data: any) => {
        this.progressQuery = false;
        if (data.status === 'ok') {
          this.haveError = false;
          data.articles.forEach((article: any) => {
            this.lastNews.push(unmarshallerNews(article));
          });
        }
      }
    );
  }

  handleError(error: HttpErrorResponse) {
    this.haveError = true;
    this.progressQuery = false;
    return throwError('error');
  }
}
