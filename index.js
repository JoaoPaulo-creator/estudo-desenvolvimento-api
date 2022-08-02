const express = require('express')
const app = express()


app.listen('3000')
app.use(express.json())




app.route('/get').get((req, res) => res.send({message: 'Ola, mundo'}))

app.route('/post').post((req, res) => res.send(req.body))


let nome = "João"

app.route('/put').get((req, res) => res.send(nome).status(200))

app.route('/put').put((req, res) => {
    nome = req.body
    res.send(nome).status(201)    
})

app.route('/:identificador').delete((req, res) => {
    res.send(req.params.identificador)
})