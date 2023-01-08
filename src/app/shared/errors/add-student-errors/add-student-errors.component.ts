import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-student-errors',
  templateUrl: './add-student-errors.component.html',
  styleUrls: ['./add-student-errors.component.scss']
})
export class AddStudentErrorsComponent {
  @Input()
  control: FormControl | undefined

}
