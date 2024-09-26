import { TestBed } from '@angular/core/testing';

import { ApiAddressServiceService } from './api-address-service.service';

describe('ApiAddressServiceService', () => {
  let service: ApiAddressServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAddressServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
