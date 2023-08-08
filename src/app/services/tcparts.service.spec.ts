import { TestBed } from '@angular/core/testing';

import { TcpartsService } from './tcparts.service';

describe('TcpartsService', () => {
  let service: TcpartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcpartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
