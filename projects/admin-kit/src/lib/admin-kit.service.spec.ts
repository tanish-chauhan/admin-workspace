import { TestBed } from '@angular/core/testing';

import { AdminKitService } from './admin-kit.service';

describe('AdminKitService', () => {
  let service: AdminKitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminKitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
