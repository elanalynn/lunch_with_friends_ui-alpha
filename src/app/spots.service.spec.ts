import { TestBed, inject } from '@angular/core/testing';

import { SpotsService } from './spots.service';

describe('SpotsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotsService]
    });
  });

  it('should ...', inject([SpotsService], (service: SpotsService) => {
    expect(service).toBeTruthy();
  }));
});
