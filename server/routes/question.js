import express from 'express'

const app = express.Router()

const currentUser = {
  firstName: 'Carlos',
  lastName: 'Juarez',
  email: 'caenjuji@gmail.com',
  password: '123456789'
}

function questionMiddleware(req, res, next){
  console.log('questionMiddleware')
  const id = req.params.id
  console.log('Id: ' + id)
  console.log('aaray' + questions)
  req.q = questions.find(({_id}) => _id === +id)
  console.log('respuesta encontrada:' + req.q)
  next()
}

function userMiddleware(req, res, next){
  req.user = currentUser
  next()
}

const question = {
  _id: 1,
  title: '¿Cómo reutilizar un componente en Angular?',
  description: 'Mire..',
  createdAt: new Date(),
  icon: 'devicon-android-plain',
  answers: [],
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
  console.log('get')
  setTimeout(() => {
    res.status(200).json(questions)
  }, 2000);
})

//GET /api/questions:id
app.get('/:id', questionMiddleware, (req, res) => {
  res.status(200).json(req.q)
})

//POST /api/questions
app.post('/', userMiddleware, (req, res) => {
  const q = req.body
  q._id = +new Date()
  q.user = req.user
  q.createdAt = new Date()
  q.answers = []
  questions.push(q)
  console.log('agregar pregunta' + questions)
  res.status(201).json(q)
})

app.post('/:id/answers', questionMiddleware, userMiddleware, (req, res) => {

  const answer = req.body
  console.log('Respuesta server →' + answer);
  const q = req.q
  answer.createdAt = new Date()
  answer.user = req.user
  q.answers.push(answer)
  res.status(201).json(answer)
})

export default app