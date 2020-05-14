import { Component, HostListener, OnInit } from '@angular/core';
import { News } from './models/news.model';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newsDisplayed: News|undefined = undefined;
  page = 1;

  constructor(private session: SessionService) {}

  ngOnInit() {
    this.reloadNews();
  }

  isDisplayLoader(): boolean {
    return this.session.progressQuery;
  }

  ifNoError(): boolean {
    return !this.session.haveError;
  }

  reloadNews() {
    this.page = 1;
    this.session.lastNews = [];
    this.session.getAllNews(this.page, 10);
  }

  isDisplayNews(): boolean {
    return this.newsDisplayed !== undefined;
  }

  clearNewsDisplayed() {
    this.newsDisplayed = undefined;
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight && !this.isDisplayNews()) {
      this.page++;
      this.session.getAllNews(this.page, 10);
    }
  }
}
