import { TestBed } from '@angular/core/testing';

import { InMemoryService } from './in-memory.service';

describe('InMemoryService', () => {
  let service: InMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
