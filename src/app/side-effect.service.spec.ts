import { TestBed } from '@angular/core/testing';

import { SideEffectService } from './side-effect.service';

describe('SideEffectService', () => {
  let service: SideEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
