import { TestBed } from '@angular/core/testing';

import { JsonManagerService } from './jsonManager.service';

describe('JsonManagerService', () => {
  let service: JsonManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
