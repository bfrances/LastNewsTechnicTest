import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LastNewsPageComponent } from './pages/last-news-page/last-news-page.component';
import { OneNewsPageComponent } from './pages/one-news-page/one-news-page.component';
import { RelativeTextTimePipe } from './pipe/relative-text-time.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    RelativeTextTimePipe,
    LastNewsPageComponent,
    OneNewsPageComponent,
    LoaderComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
