export interface QuestionViewModel {
  id: string;
  content: string;
  questionType: string;
  isActive: boolean;
}

export interface QuestionCreateViewModel {
  content: string;
  questionType: string;
  isActive: boolean;
}

export interface QuestionEditViewModel {
  id: string;
  content: string;
  questionType: string;
  isActive: boolean;
}

export interface AnswerViewModel {
  id: string;
  content: string;
  isCorrect: boolean;
  isActive: boolean;
  questionId: string;
}

export interface AnswerCreateViewModel {
  content: string;
  isCorrect: boolean;
  isActive: boolean;
  questionId: string;
}

export interface AnswerEditViewModel {
  id: string;
  content: string;
  isCorrect: boolean;
  isActive: boolean;
  questionId: string;
}
