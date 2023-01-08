import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanLayoutComponent } from './clean-layout.component';

describe('CleanLayoutComponent', () => {
  let component: CleanLayoutComponent;
  let fixture: ComponentFixture<CleanLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleanLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
