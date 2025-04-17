import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../common/header/header.component';
import { FooterComponent } from '../../../common/footer/footer.component';

@Component({
  selector: 'app-manager-layout',
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './manager-layout.component.html',
  styleUrl: './manager-layout.component.css'
})
export class ManagerLayoutComponent {

}
