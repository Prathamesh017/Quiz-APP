import quizModel from '../Model/quizModel.js'
//@description create quiz
//@route   api/user/quiz POST
export const CreateQuiz = async (req, res) => {
  try {
    // req.body.map((quizs))>{
    // const quiz = await quizModel.create({
    //   category: req.body.category,
    //   difficulty: req.body.difficulty,
    //   question: req.body.question,
    //   answers: req.body.answers,
    //   finalAnswer: req.body.finalAnswer,
    // })
    console.log(req.body)
    const quiz = await quizModel.insertMany(req.body)
    if (!quiz) {
      res.status(400).json({
        status: 'Failure',
        message: "Couldn't Create Quiz",
      })
      return
    }
    res.status(201).json({
      status: 'Success',
      data: quiz,
      message: 'Quiz Question Created Successfully',
    })
  } catch (error) {
    console.log(error.message)
    throw new Error(error)
  }
}

//@description get quiz
//@route api/user/quiz GET
export const GetQuiz = async (req, res) => {
  try {
    let { difficulty, category } = req.query
    console.log(req.query)
    const allquizes = await quizModel.find({ difficulty, category })

    res.status(200).json({
      status: 'Success',
      data: allquizes,
      message: 'All Quizes',
    })
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

//@description get all categories
//@route api/user/category GET
export const getAllCategories = async (req, res) => {
  try {
    const allCategories = await quizModel.distinct('category')
    if (!allCategories) {
      res.status(400).json({
        status: 'Failure',
        message: "Couldn't find Any Category",
      })
      return
    }
    res.status(200).json({
      status: 'Success',
      data: allCategories,
      message: 'All Categories Recieved',
    })
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}
