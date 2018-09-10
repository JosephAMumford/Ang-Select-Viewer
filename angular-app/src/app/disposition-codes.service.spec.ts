import { TestBed, inject } from '@angular/core/testing';

import { DispositionCodesService } from './disposition-codes.service';

describe('DispositionCodesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DispositionCodesService]
    });
  });

  it('should be created', inject([DispositionCodesService], (service: DispositionCodesService) => {
    expect(service).toBeTruthy();
  }));
});
