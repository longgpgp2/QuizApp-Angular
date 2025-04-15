import { QuestionType } from "../core/enums/question-type.enum"
import Answer from "./answer.model"

export default class Question {
    id!: number
    content!: string
    questionType!: QuestionType
    answers!: Answer[]
}