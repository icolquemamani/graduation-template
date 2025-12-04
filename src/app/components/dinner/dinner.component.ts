import { Component, OnInit, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-dinner',
  imports: [],
  templateUrl: './dinner.component.html',
  styleUrl: './dinner.component.scss'
})
export class DinnerComponent implements AfterViewInit, OnDestroy {
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
