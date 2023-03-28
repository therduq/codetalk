import { TestBed } from '@angular/core/testing';

import { FirebasebdService } from './firebasebd.service';

describe('FirebasebdService', () => {
  let service: FirebasebdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebasebdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
