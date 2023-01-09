import { Injectable } from '@angular/core';
import { Course } from '../models/courses.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses(id: string | number) {
    return new Course(Number(id), 'Curso1', '10 weeks', 4000, 'Remote', 'Open', true);
  }
}
