import { TestBed } from '@angular/core/testing';

import { SurgeonServiceService } from './surgeon-service.service';

describe('SurgeonServiceService', () => {
  let service: SurgeonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurgeonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
