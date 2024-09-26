import { TestBed } from '@angular/core/testing';

import { ApiPhoneServiceService } from './api-phone-service.service';

describe('ApiPhoneServiceService', () => {
  let service: ApiPhoneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPhoneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
