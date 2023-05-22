import { TestBed } from '@angular/core/testing';

import { GetPermetionService } from './get-permetion.service';

describe('GetPermetionService', () => {
  let service: GetPermetionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPermetionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
