import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[color]',
  standalone: true,
})
export class ColorDirective {
  @HostBinding('style.backgroundColor')
  backgroundColor = '';

  @HostListener('mouseenter')
  enter() {
    this.backgroundColor = 'yellow';
    console.log('enter');
  }

  @HostListener('mouseleave')
  leave() {
    this.backgroundColor = '';
    console.log('leave');
  }
}
