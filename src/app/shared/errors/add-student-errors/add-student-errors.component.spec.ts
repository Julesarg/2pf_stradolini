import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentErrorsComponent } from './add-student-errors.component';

describe('AddStudentErrorsComponent', () => {
  let component: AddStudentErrorsComponent;
  let fixture: ComponentFixture<AddStudentErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentErrorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudentErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
