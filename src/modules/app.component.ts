import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizService } from '../services/quiz/quiz.service';
import { QUIZ_SERVICE } from '../constants/injection.constant';
import { HeaderComponent } from './shared/common/header/header.component';
import { FooterComponent } from './shared/common/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(@Inject(QUIZ_SERVICE) private readonly quizService: QuizService) { }

}
