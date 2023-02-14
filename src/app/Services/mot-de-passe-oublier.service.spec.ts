import { TestBed } from '@angular/core/testing';

import { MotDePasseOublierService } from './mot-de-passe-oublier.service';

describe('MotDePasseOublierService', () => {
  let service: MotDePasseOublierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotDePasseOublierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
