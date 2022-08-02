const express = require('express')
const app = express()
const axios = require('axios')

app.use(express.json())
app.listen('3000')

//consultado informações com o axios
app.route('/').get((req,res) =>{
    axios.get('https://api.github.com/users/JoaoPaulo-creator')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => res.send(error))
})