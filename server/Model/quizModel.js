import mongoose from 'mongoose'
const quizSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answers: {
    type: [String],
    required: true,
  },
  correct_answer: {
    type: String,
    required: true,
  },
})
const quizModel = mongoose.model('Quiz', quizSchema)
export default quizModel
