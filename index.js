const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./Data/categories.json');
const news = require('./Data/news.json');

app.get('/', (req, res) => {
  res.send('Dragon Api Running')
})

app.get('/news-category', (req, res) => {
  res.send(categories);
})

app.get('/news/:id', (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find(n => n._id === id)
  res.send(selectedNews);
})

app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  if(id === "08"){
    res.send(news);
  }
  else{
    const newsCategory = news.filter(n => n.category_id === id)
    res.send(newsCategory);
  }
})

app.get('/news', (req, res) => {
  res.send(news);
})

app.listen(port, () => {
  console.log('dragon news server running on port', port);
})