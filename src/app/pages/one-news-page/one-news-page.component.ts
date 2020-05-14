import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-one-news-page',
  templateUrl: './one-news-page.component.html',
  styleUrls: ['./one-news-page.component.css'],
  animations: [
    trigger('fadeInAnimation', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('.3s', style({ opacity: 1 }))
        ]),
    ])
  ]
})
export class OneNewsPageComponent implements OnInit {
  @Input() news: News|undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  newsContentFormatted() {
    const url: string = '<a target="_blank" href="' + this.news.url + '">Lire la suite</a>';
    return this.news.content.replace(new RegExp(/(\[+.*chars\])/, 'gm'), url);
  }
}
