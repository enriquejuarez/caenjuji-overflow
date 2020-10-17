import express from 'express'

const app = express.Router()

const question = {
  _id: 1,
  title: '___¿Cómo reutilizar un componente en Angular?',
  description: 'Mire..',
  createdAt: new Date(),
  icon: 'devicon-android-plain',
  answer: [],
  user: {
    firstName: 'Carlos',
    lastName: 'Juarez',
    email: 'caenjuji@gmail.com',
    password: '123456789'
  }
}

const questions = new Array(10).fill(question)

//GET /api/questions
app.get('/', (req, res) => {
  setTimeout(() => {
    res.status(200).json(questions)
  }, 2000);
})

//GET /api/questions:id
app.get('/:id', (req, res) => {
  const id = req.params.id
  const q = questions.find(({_id}) => _id === +id)
  res.status(200).json(q)
})

//POST /api/questions
app.post('/', (req, res) => {
  const q = req.body
  q._id = +new Date()
  q.user = {
    email: 'caenjuji@gmail.com',
    password: '123456',
    firstName: 'Carlos',
    lastName: 'Juarez'
  }
  q.createdAt = new Date()
  q.answer = []
  questions.push(q)
  res.status(201).json(q)
})

export default app