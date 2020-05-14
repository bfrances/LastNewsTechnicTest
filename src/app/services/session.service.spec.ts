import { TestBed } from '@angular/core/testing';

import { SessionService } from './session.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

describe('SessionService', () => {
  let service: SessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(SessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('handelError', () => {
    const error = new HttpErrorResponse({});
    service.handleError(error);
    expect(service.haveError).toBeTrue();
  });
});
