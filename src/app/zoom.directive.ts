import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {
  //@HostBinding('style.fontSize') fontSize: Number;
  constructor(private elementRef: ElementRef, private renderer: Renderer2)
  {
    renderer.setStyle(elementRef.nativeElement, "cursor", "pointer");
    elementRef.nativeElement.style.color = "blue";
    //elementRef.nativeElement.style.fontSize = "12pt";

    renderer.listen(elementRef.nativeElement, "mouseover", function () {
      elementRef.nativeElement.style.color = "red";
      //elementRef.nativeElement.style.fontSize = "20pt"
    })

    renderer.listen(elementRef.nativeElement, "mouseout", function () {
      elementRef.nativeElement.style.color = "blue";
      //elementRef.nativeElement.style.fontSize = "12pt"
    })
 }
}
