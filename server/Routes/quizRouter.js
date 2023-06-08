import express from 'express'
import {
  CreateQuiz,
  GetQuiz,
  getAllCategories,
} from '../Controllers/quizController.js'

const quizRouter = express.Router()

quizRouter
  .get('/', GetQuiz)
  .get('/category', getAllCategories)
  .post('/', CreateQuiz)
export default quizRouter
