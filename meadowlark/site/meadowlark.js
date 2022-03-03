const express = require('express')
const { engine } = require('express-handlebars')

const fortune = require('./lib/fortune')
const handlers = require('./lib/handlers')

const app = express()
const port = process.env.PORT || 3000

// configure Handlebars view engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.get('/', handlers.home)

app.get('/about', handlers.about)

// custom 404 page
app.use(handlers.notFound)

// custom 500 page
app.use(handlers.serverError)

app.listen(port, () =>
  console.log(`Express stated on http://localhost:${port}; `)
)
