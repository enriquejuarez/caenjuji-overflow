import express from 'express'
import Debug from 'debug'

const app = express.Router()
const debug = new Debug('caenjuji-overflow:auth')

const users = [
    {
        firstName: 'Carlos',
        lastName: 'Juárez',
        email: 'caenjuji@gmail.com',
        password: '123456',
        _id: 123
    }
]

const findUserByEmail = e => users.find(({email}) => email === e)

function comparePassword(providedPassword, userPassword){
    return providedPassword === userPassword
}

app.post('/signin', (req, res, next) => {
    const {email, password} = req.body
    const user = findUserByEmail(email)

    if (!user){
        debug(`User with email ${email} not found`)
        return handleLoginFailed(res)
    }

    if (!comparePassword(password, user.password)) {
        debug(`Password do not march: ${password} !== ${user.password}`)
        return handleLoginFailed(res)
        
    }

    function handleLoginFailed(res){
        return res.status(401).json({
            message: 'Login failed',
            error: 'Email and password don\' match'
        })
    }

})

export default app