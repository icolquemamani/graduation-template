import { Component, OnInit, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent implements AfterViewInit, OnDestroy {
  constructor(
    private scrollAnimation: ScrollAnimationService,
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit() {
    const elements = this.elementRef.nativeElement.querySelectorAll('.scroll-animate');
    elements.forEach((el: HTMLElement) => {
      el.classList.add('opacity-0');
      this.scrollAnimation.observe(el);
    });
  }

  ngOnDestroy() {
    this.scrollAnimation.disconnect();
  }
}
