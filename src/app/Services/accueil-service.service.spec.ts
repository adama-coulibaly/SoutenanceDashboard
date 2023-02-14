import { TestBed } from '@angular/core/testing';

import { AccueilServiceService } from './accueil-service.service';

describe('AccueilServiceService', () => {
  let service: AccueilServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccueilServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
