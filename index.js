const path = require('path');
const express = require('express');
const app = new express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'pages/index.html'));
  res.render('index');
})

app.get('/about', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'pages/about.html'));
  res.render('about');
})

app.get('/contact', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
  res.render('contact');
})

app.get('/post', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'pages/post.html'));
  res.render('post');
})

app.listen(4000, () => {
  console.log('App working on port 4000');
})