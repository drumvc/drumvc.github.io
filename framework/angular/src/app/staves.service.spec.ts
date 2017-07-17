import { TestBed, inject } from '@angular/core/testing';

import { StavesService } from './staves.service';

describe('StavesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StavesService]
    });
  });

  it('should be created', inject([StavesService], (service: StavesService) => {
    expect(service).toBeTruthy();
  }));
});
