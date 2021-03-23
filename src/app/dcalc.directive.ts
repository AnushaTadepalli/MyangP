import { HostBinding } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appDcalc]'
})
export class DcalcDirective {

  @HostBinding('style.color') color: string;

  constructor(private elementRef: ElementRef) {
    this.color = 'white';
    elementRef.nativeElement.style.color = 'pink';
  }

  @HostListener('mouseover') onMouseOver() {
    this.color = 'blue';
    this.elementRef.nativeElement.style.color = 'lightblue';
   }

  @HostListener('mouseleave') onMouseLeave() {
    this.color = 'red';
    this.elementRef.nativeElement.style.color = 'gray';
    
  }
}
