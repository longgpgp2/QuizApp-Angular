import { Component } from '@angular/core';
import { HeaderComponent } from '../../../common/header/header.component';
import { FooterComponent } from '../../../common/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-layout',
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './customer-layout.component.html',
  styleUrl: './customer-layout.component.css'
})
export class CustomerLayoutComponent {

}
