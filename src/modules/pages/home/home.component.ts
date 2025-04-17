import { Component } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faMapLocation, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  faLocation: IconDefinition = faMapLocation;
  faPhone: IconDefinition = faPhone;
  faEnvelope: IconDefinition = faEnvelope;
}
