import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  set appHighlight(condition: any) {
    if (condition) {
      this.el.nativeElement.style.background = 'yellow';
    } else {
      this.el.nativeElement.style.background = null;
    }
  }

  constructor(private el: ElementRef) {
  }

}
