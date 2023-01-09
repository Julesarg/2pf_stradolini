import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent {
  constructor(private readonly route: ActivatedRoute, private readonly coursesService: CoursesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(this.coursesService.getCourses(params['id']))
    })
  }
}
