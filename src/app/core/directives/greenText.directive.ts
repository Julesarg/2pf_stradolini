import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appGreenText]'
})
export class GreenTextDirective implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.style.color = 'rgb(0, 206, 86)'
  }

}
