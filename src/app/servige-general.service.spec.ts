import { TestBed } from '@angular/core/testing';

import { ServigeGeneralService } from './servige-general.service';

describe('ServigeGeneralService', () => {
  let service: ServigeGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServigeGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
