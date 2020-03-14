import { TestBed, async, inject } from '@angular/core/testing';

import { ClientListGuard } from './client-list.guard';

describe('ClientListGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientListGuard]
    });
  });

  it('should ...', inject([ClientListGuard], (guard: ClientListGuard) => {
    expect(guard).toBeTruthy();
  }));
});
