import { TestBed } from '@angular/core/testing';

import { HttpConfigService } from './http-config.service';
import { HttpClientModule } from '@angular/common/http';

const validURL = (str: string) => {
  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(str);
};

describe('HttpConfigService', () => {
  let service: HttpConfigService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(HttpConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('is valid url', () => {
    // @ts-ignore
    expect(validURL(service.getDefaultURL())).toBeTrue();
  });
});
