import { TestBed } from '@angular/core/testing';

import { OpenaiserviceService } from './openaiservice.service';

describe('OpenaiserviceService', () => {
  let service: OpenaiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenaiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
