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

// /api/questions
app.get('/', (req, res) => {
  setTimeout(() => {
    res.status(200).json(questions)
  }, 2000);
})

// /api/questions:id
app.get('/:id', (req, res) => res.status(200).json(question))

export default app