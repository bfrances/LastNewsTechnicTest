import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { SessionService } from './services/session.service';
import { By } from '@angular/platform-browser';
import { News } from './models/news.model';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('ralod', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.page).toEqual(1);
    app.page = 2;
    expect(app.page).toEqual(2);
    app.reloadNews();
    expect(app.page).toEqual(1);
  });

  it('display loader', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const session = fixture.debugElement.injector.get(SessionService);
    session.progressQuery = true;
    fixture.detectChanges();
    const appDe: DebugElement = fixture.debugElement;
    expect(app.isDisplayLoader()).toBeTrue();
    const appLoader = appDe.query(By.css('app-loader'));
    expect(appLoader).toBeTruthy();
  });

  it('display error', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const session = fixture.debugElement.injector.get(SessionService);
    session.haveError = true;
    fixture.detectChanges();
    const appDe: DebugElement = fixture.debugElement;
    expect(app.ifNoError()).toBeFalse();
    let appError = appDe.query(By.css('app-error'));
    expect(appError).toBeTruthy();
    session.haveError = false;
    fixture.detectChanges();
    expect(app.ifNoError()).toBeTrue();
    appError = appDe.query(By.css('app-error'));
    expect(appError).toBeNull();
  });

  it('display good all last news', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const session = fixture.debugElement.injector.get(SessionService);
    const appDe: DebugElement = fixture.debugElement;
    app.newsDisplayed = new News();
    app.clearNewsDisplayed();
    fixture.detectChanges();
    expect(app.isDisplayNews()).toBeFalse();
    const lastNewsPageDe = appDe.query(By.css('app-last-news-page'));
    expect(lastNewsPageDe).toBeTruthy();
    const oneNewsPageDe = appDe.query(By.css('app-one-news-page'));
    expect(oneNewsPageDe).toBeNull();
    expect(app.newsDisplayed).toBeUndefined();
  });

  it('display good all last news', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const session = fixture.debugElement.injector.get(SessionService);
    const appDe: DebugElement = fixture.debugElement;
    app.newsDisplayed = new News();
    fixture.detectChanges();
    expect(app.isDisplayNews()).toBeTrue();
    const lastNewsPageDe = appDe.query(By.css('app-last-news-page'));
    expect(lastNewsPageDe).toBeNull();
    const oneNewsPageDe = appDe.query(By.css('app-one-news-page'));
    expect(oneNewsPageDe).toBeTruthy();
  });




});
