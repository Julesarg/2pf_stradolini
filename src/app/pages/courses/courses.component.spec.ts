import { CoursesComponent } from './courses.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MaterialModuleModule } from '../../core/modules/material-module.module';
import { CoursesService } from 'src/app/core/services/courses.service';


describe('pruebas de cursos', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let spyCursos: jasmine.Spy;
  let coursesService: CoursesService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesComponent],
      imports: [MaterialModuleModule, HttpClientTestingModule],
      providers: []

    })
      .compileComponents();

    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    coursesService = TestBed.inject(CoursesService);
    spyCursos = spyOn(coursesService, 'getCoursesFromAPI').and.callThrough()
    fixture.detectChanges();
  })

  it('debe crear component', () => {
    expect(component).toBeTruthy();
  });
  // it('debe crear array de curso', () => {
  //   component.ngOnInit();
  //   expect(spyCursos).toHaveBeenCalled()
  // })
})