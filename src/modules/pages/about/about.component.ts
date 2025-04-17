import { Component } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faMapLocation, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  faLocation: IconDefinition = faMapLocation;
  faPhone: IconDefinition = faPhone;
  faEnvelope: IconDefinition = faEnvelope;
}
