import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faPencil,
  faQuestion,
  faUser,
  faUserCog,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  faQuestion: IconDefinition = faQuestion;
  faUser: IconDefinition = faUser;
  faUserCog: IconDefinition = faUserCog;
  faPencil: IconDefinition = faPencil;
}
