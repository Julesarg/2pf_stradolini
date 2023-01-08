import { Pipe, PipeTransform } from '@angular/core';
import { Student } from 'src/app/models/students.model';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: Student, ...args: unknown[]): string {
    return args[0] ? value.name + " " + value.lastName : value.name
  }

}
