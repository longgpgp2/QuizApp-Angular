import Question from "./question.model"

export default class Quiz {
    id!: number
    title!: string
    description?: string
    duration!: number
    questions!: Question[]
    
}