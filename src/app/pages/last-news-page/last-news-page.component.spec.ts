import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNewsPageComponent } from './last-news-page.component';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { News, unmarshallerNews } from 'src/app/models/news.model';
import { RelativeTextTimePipe } from 'src/app/pipe/relative-text-time.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LastNewsPageComponent', () => {
  let component: LastNewsPageComponent;
  let fixture: ComponentFixture<LastNewsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        BrowserAnimationsModule
      ],
      declarations: [
        RelativeTextTimePipe,
        LastNewsPageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastNewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display no actuality', () => {
    const lastNewsDe: DebugElement = fixture.debugElement;
    const divDe = lastNewsDe.query(By.css('#noNews'));
    const div: HTMLElement = divDe.nativeElement;
    expect(div).toBeTruthy();
    const imgDe = divDe.query(By.css('img'));
    expect(imgDe).toBeTruthy();
    expect(imgDe.attributes.src).toEqual('assets/noNews.png');
    expect(div.textContent).toContain('Pas d\'actualité');
  });

  it('display all news', () => {
    const lastNewsDe: DebugElement = fixture.debugElement;
    const session = fixture.debugElement.injector.get(SessionService);
    session.lastNews.push(new News());
    session.lastNews.push(new News());
    session.lastNews.push(new News());
    fixture.detectChanges();
    const allNews = lastNewsDe.queryAll(By.css('#news'));
    expect(allNews.length).toEqual(3);
  });

  it('display title', () => {
    const lastNewsDe: DebugElement = fixture.debugElement;
    const session = fixture.debugElement.injector.get(SessionService);
    const title = 'Titre de la news';
    session.lastNews.push(unmarshallerNews({title}));
    fixture.detectChanges();
    const newsDe = lastNewsDe.query(By.css('#news'));
    expect(newsDe.nativeElement.textContent).toContain(title);
  });
});
