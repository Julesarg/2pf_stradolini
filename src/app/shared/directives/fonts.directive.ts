import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFonts]'
})
export class FontsDirective implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.style.fontSize = '20px',
      this.element.nativeElement.style.color = 'rgba(0,0,0,0.7)'
  }

}
