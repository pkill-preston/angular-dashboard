import { TestBed } from '@angular/core/testing';

import { GraphsServiceService } from './graphs-service.service';

describe('GraphsServiceService', () => {
  let service: GraphsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
