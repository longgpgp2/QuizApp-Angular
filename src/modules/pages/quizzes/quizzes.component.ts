import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-quizzes',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.css',
})
export class QuizzesComponent {
  takeQuizForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.takeQuizForm = this.fb.group({
      quizCode: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.takeQuizForm.valid) {
      const formData = this.takeQuizForm.value;
      alert('Taking quiz!');
      this.takeQuizForm.reset();
    } else {
      this.markFormGroupTouched(this.takeQuizForm);
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
