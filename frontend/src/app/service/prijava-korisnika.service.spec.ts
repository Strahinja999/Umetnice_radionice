import { TestBed } from '@angular/core/testing';

import { PrijavaKorisnikaService } from './prijava-korisnika.service';

describe('PrijavaKorisnikaService', () => {
  let service: PrijavaKorisnikaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrijavaKorisnikaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
