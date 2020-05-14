import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneNewsPageComponent } from './one-news-page.component';
import { HttpClientModule } from '@angular/common/http';
import { unmarshallerNews } from 'src/app/models/news.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('OneNewsPageComponent', () => {
  let component: OneNewsPageComponent;
  let fixture: ComponentFixture<OneNewsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        BrowserAnimationsModule
      ],
      declarations: [ OneNewsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneNewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test newsContentFormatted', () => {
    const randomNumber = (Math.floor(Math.random() * 5000));
    component.news = unmarshallerNews({
      content: 'content[+' + randomNumber + ' chars]',
      url: ''
    });
    expect(component.newsContentFormatted()).toEqual('content<a target="_blank" href="">Lire la suite</a>');
    const json = {
      content: 'content[+4785 chars]',
      url: 'https://lastnews.com'
    };
    component.news = unmarshallerNews(json);
    expect(component.newsContentFormatted()).toEqual('content<a target="_blank" href="' + json.url + '">Lire la suite</a>');
  });


});
