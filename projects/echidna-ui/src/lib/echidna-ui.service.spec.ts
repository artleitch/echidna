import { TestBed } from '@angular/core/testing';

import { EchidnaUiService } from './echidna-ui.service';

describe('EchidnaUiService', () => {
  let service: EchidnaUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EchidnaUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
