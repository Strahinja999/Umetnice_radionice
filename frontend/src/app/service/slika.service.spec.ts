import { TestBed } from '@angular/core/testing';

import { SlikaService } from './slika.service';

describe('SlikaService', () => {
  let service: SlikaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlikaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
