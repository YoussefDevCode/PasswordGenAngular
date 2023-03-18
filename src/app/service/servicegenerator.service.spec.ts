import { TestBed } from '@angular/core/testing';

import { ServicegeneratorService } from './servicegenerator.service';

describe('ServicegeneratorService', () => {
  let service: ServicegeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicegeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
