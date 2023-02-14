import { TestBed } from '@angular/core/testing';

import { FormationServiceService } from './formation-service.service';

describe('FormationServiceService', () => {
  let service: FormationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
