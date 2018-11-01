// This is the HIGHLIGHT directive example form the documentation
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {
  @Input('appAttr') highlightColor: string;

  @Input() defaultColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('white');
  }
  constructor(private el: ElementRef) {
   }

   highlight(color) {
     this.el.nativeElement.style.background = color;
   }

}
