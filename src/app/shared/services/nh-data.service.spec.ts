import { TestBed } from '@angular/core/testing';

import { NhDataService } from './nh-data.service';

describe('NhDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NhDataService = TestBed.get(NhDataService);
    expect(service).toBeTruthy();
  });
});
