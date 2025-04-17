import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faLocation, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  faLocation: IconDefinition = faMapLocation
  faPhone: IconDefinition = faPhone
  faEnvelope: IconDefinition = faEnvelope


  today: Date = new Date();
}
