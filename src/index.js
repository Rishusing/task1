const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const { sendWelcomeEmail} = require('./emails/accounts')


const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
    res.send({ 'start':'Welcome'});
})

app.post('/users', async (req, res) => {

    const user = new User(req.body)

    try {
        await user.save()
        sendWelcomeEmail(user.email, user.name)
        res.status(201).send({
            'msg': 'Register successfully',
            'verify': 'Check Gmail and verify your email'
        })
    } catch (e) {
        res.status(400).send(e)
    }
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
