import { TestBed } from '@angular/core/testing';

import { NeregistrovanService } from './neregistrovan.service';

describe('NeregistrovanService', () => {
  let service: NeregistrovanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeregistrovanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
