import { TestBed } from '@angular/core/testing';

import { SayingGoodbyeService } from './saying-goodbye.service';

describe('SayingGoodbyeService', () => {
  let service: SayingGoodbyeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SayingGoodbyeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
