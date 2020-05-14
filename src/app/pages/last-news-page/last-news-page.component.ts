import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { News } from 'src/app/models/news.model';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-last-news-page',
  templateUrl: './last-news-page.component.html',
  styleUrls: ['./last-news-page.component.css'],
  animations: [
    trigger('fadeInAnimation', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('.3s', style({ opacity: 1 }))
        ]),
    ])
  ]
})
export class LastNewsPageComponent implements OnInit {
   @Output() clickNews: EventEmitter<News> = new EventEmitter();

  constructor(public session: SessionService) { }

  ngOnInit(): void {
  }

  clickOnNews(news: News) {
    this.clickNews.emit(news);
  }
}
