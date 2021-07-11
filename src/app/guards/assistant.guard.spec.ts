import { TestBed } from '@angular/core/testing';

import { AssistantGuard } from './assistant.guard';

describe('AsistantGuard', () => {
  let guard: AssistantGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AssistantGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
