const express = require('express');
const router = express.Router();

let books = require('./existingData.json');

router.post('/books', (req, res) => {
    const numberOfBooks = books.length;
    let currentBook = req.body;
    currentBook.id = numberOfBooks + 1;
    books.push(currentBook);
    res.status(201).send(currentBook);
});

router.get('/books', (req, res) => {
    let retBooks = {
        'books' : books.sort((a,b) => (a.title > b.title) ? 1 : -1)
    };
    res.status(200).send(retBooks);
});

router.delete('/books', (req, res) => {
    if (books.length !== 0){
        books = [];
    }
    res.status(204).send();
});

module.exports = router;