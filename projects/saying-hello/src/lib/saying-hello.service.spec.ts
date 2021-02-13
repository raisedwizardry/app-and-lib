import { TestBed } from '@angular/core/testing';

import { SayingHelloService } from './saying-hello.service';

describe('SayingHelloService', () => {
  let service: SayingHelloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SayingHelloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
