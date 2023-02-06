import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StudentEffects } from './student.effects';

describe('StudentEffects', () => {
  let actions$: Observable<any>;
  let effects: StudentEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StudentEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(StudentEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
