// import { MatDialog } from "@angular/material/dialog";
// import { BehaviorSubject, Observable } from "rxjs";
// import { CourseDetailComponent } from "src/app/shared/dialogs-modals/course-detail/course-detail.component";
// import { Course } from "../models/courses.model";

// const mock_course: Course[] =
//   [{
//     id: 0,
//     name: '',
//     duration: '',
//     price: 0,
//     modality: '',
//     inscriptions: '',
//     detailsIcon: false,
//     detailsText: '',
//     img: undefined
//   }]

// export class CoursesServiceMock {

//   public courses$: Observable<Course[]>;
//   private courses = new BehaviorSubject<Course[]>([]);

//   constructor(private readonly dialogService: MatDialog) {
//     this.courses$ = this.courses.asObservable();
//   }

//   getCoursesFromAPI(): Observable<Course[]> | any {
//     this.courses.next(mock_course);
//   }

//   viewCourseDetail(course: Course) {
//     let dialog = this.dialogService.open(CourseDetailComponent, { data: course })
//   }
// }