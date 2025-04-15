import Quiz from "../../models/quiz.model"

export default interface IQuizService {
    getQuizzes(): Promise<Quiz[]>
    getQuizById(id: number): Promise<Quiz | null>
    addQuiz(quiz: Quiz): Promise<void>
    updateQuiz(quiz: Quiz): Promise<void>
    deleteQuiz(id: number): Promise<void>
}