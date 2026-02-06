const express = require('express');
const posts = require('./posts');
const app = express()
const port = 3000

// importazione router posts



app.use(express.static('posts'));

app.get('/', (req, res) => {
    res.send('welcome to my blog')
})

// refactor in router file routerPosts
app.get('/posts', function (req, res) {
    res.send('Lista dei posts');
});
// show
app.get('/posts/:id', function (req, res) {
    res.send('Dettagli del post ' + req.params.id);
});
// store
app.post('/posts', function (req, res) {
    res.send('Creazione nuovo post');
});
// update
app.put('/posts/:id', function (req, res) {
    res.send('Modifica integrale del post' + req.params.id);
});
// modify
app.patch('/posts/:id', function (req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
});
// destroy
app.delete('/posts/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
});
//


// use del roiuter posts

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})