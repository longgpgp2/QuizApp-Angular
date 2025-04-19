import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AUTH_SERVICE } from '../../../constants/injection.constant';
import IAuthService from '../../../services/auth/auth-service.interface';
@Component({
  selector: 'app-login',
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    @Inject(AUTH_SERVICE) private readonly authService: IAuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login('', this.loginForm.value).then((response) => {
        if (response != undefined) {
          console.log(response);
          this.router.navigate(['/quizzes']);
        }
      });
      this.router.navigate(['/home']);
    } else {
      this.markFormGroupTouched(this.loginForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
