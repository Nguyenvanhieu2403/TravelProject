import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverRotateImg]'
})
export class HoverRotateImgDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 5;
    const rotateX = -(y / rect.height - 0.5) * 5;

    this.renderer.setStyle(this.el.nativeElement, 'transform', `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale3d(1, 1, 1)`);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)');
  }

}
