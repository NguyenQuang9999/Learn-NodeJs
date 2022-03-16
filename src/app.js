const path = require('path')
const express = require('express')
// const morgan = require('morgan')
const expHandle = require('express-handlebars')
const app = express()
const port = 3000
// Logger HTTP methods
// app.use(morgan('combined'))
// query public file
app.use(express.static(path.join(__dirname,'public')))
// config views
app.engine('hbs', expHandle.engine({extname: '.hbs'}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'./resourses/views'))

app.listen(port, () => console.log(`http://localhost:${port}`))

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})