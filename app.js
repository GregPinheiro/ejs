const express = require('express')
const app = express()
const port = 8080

const rotasUsuarios = require('./routes/usuarios')


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.use('/api', rotasUsuarios)

app.listen(port, () => console.log(`Server listen on port ${port}`))