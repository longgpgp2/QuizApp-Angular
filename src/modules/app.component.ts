import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizService } from '../services/quiz/quiz.service';
import { QUIZ_SERVICE } from '../constants/injection.constant';
import { HeaderComponent } from './shared/common/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'QuizApp';
  
  constructor(@Inject(QUIZ_SERVICE) private readonly quizService: QuizService) { }
  
}
