import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Course } from '../models/courses.model';
import { CourseDetailComponent } from '../../shared/dialogs-modals/course-detail/course-detail.component';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  public courses$: Observable<Course[]>;
  private courses = new BehaviorSubject<Course[]>([]);

  constructor(private readonly dialogService: MatDialog) {
    this.courses$ = this.courses.asObservable();
    this.getcoursesFromAPI().subscribe(prod => {
      this.courses.next(prod);
    });
  }

  getcoursesFromAPI(): Observable<Course[]> {
    return of([
      {
        id: 1,
        name: "Portrait & Lightning Photography",
        duration: "3 months",
        price: 4000,
        modality: "Face to face",
        inscriptions: "Open",
        detailsIcon: true,
        detailsText: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet., comes from a line in section 1.10.32.",
        img: "../../../assets/images/portraitph.png"
      },
      {
        id: 2,
        name: "Photograph Basics for Beginners",
        duration: "3.5 months",
        price: 2000,
        modality: "Face to face",
        inscriptions: "Open",
        detailsIcon: true,
        detailsText: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
        img: "../../../assets/images/beginnerph.png"
      },
      {
        id: 3,
        name: "Exposure, Landscape & Macro Professional Photography",
        duration: "7 months",
        price: 6500,
        modality: "Face to face",
        inscriptions: "Closed",
        detailsIcon: true,
        detailsText: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
        img: "../../../assets/images/proph.png"
      },
      {
        id: 4,
        name: "Lightroom & Photoshop | Retouching & Lightning",
        duration: "2 months",
        price: 1500,
        modality: "Remote",
        inscriptions: "Open",
        detailsIcon: true,
        detailsText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        img: "../../../assets/images/remoteph.png"
      },
    ]);

  }

  viewCourseDetail(course: Course) {
    let dialog = this.dialogService.open(CourseDetailComponent, { data: course })

    // dialog.afterClosed().subscribe((data) => { if (data) { this.courses = this.courses.map((element: { id: number; }) => element.id === course.id ? { ...element, ...data } : element) } })
  }
}