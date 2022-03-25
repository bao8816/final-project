const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', exphbs.engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'rsrc/views'))

app.get('/', (req, res) => {
  res.render('customer-home', {layout: 'home-layout'})
})

app.get('/admin', (req, res) => {
  res.render('admin-home', {layout: 'home-layout'})
})

app.get('/admin-upload', (req, res) => {
  res.render('admin-upload', {layout: 'upload-layout'})
})

app.get('/admin-dashboard', (req, res) => {
  res.render('admin-dashboard', {layout: 'adm-dash-layout'})
})

app.get('/profile', (req, res) => {
  res.render('profile', {layout: 'profile-layout'})
})

app.get('/login', (req, res) => {
  res.render('login', {layout: 'iden-layout'})
})

app.get('/signup', (req, res) => {
  res.render('signup', {layout: 'iden-layout'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
