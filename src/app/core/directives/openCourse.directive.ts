import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appOpenCourse]'
})
export class OpenCourseDirective implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.style.color = 'rgb(255, 255, 255)';
    this.element.nativeElement.style.backgroundColor = 'green';
    this.element.nativeElement.style.width = '40%'
  }
}