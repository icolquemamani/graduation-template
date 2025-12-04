import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { PhotographerComponent } from './components/photographer/photographer.component';
import { AcknowledgmentsComponent } from './components/acknowledgments/acknowledgments.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { CeremonyComponent } from './components/ceremony/ceremony.component';
import { DinnerComponent } from './components/dinner/dinner.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeroComponent,
    PhotographerComponent,
    AcknowledgmentsComponent,
    GreetingComponent,
    SponsorsComponent,
    CeremonyComponent,
    DinnerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'graduation';
}
