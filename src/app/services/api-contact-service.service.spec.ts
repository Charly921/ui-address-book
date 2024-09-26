import { TestBed } from '@angular/core/testing';

import { ApiContactServiceService } from './api-contact-service.service';

describe('ApiContactServiceService', () => {
  let service: ApiContactServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiContactServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
