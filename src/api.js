const express = require('express');
const router = express.Router();

let books = [];

router.post('/', (req, res) => {
    const numberOfBooks = books.length;
    let currentBook = req.body;
    currentBook.id = numberOfBooks + 1;
    books.push(currentBook);
    res.status(201).send(currentBook);
});

router.get('/', (req, res) => {
    let retBooks = {
        'books' : books.sort((a,b) => (a.title > b.title) ? 1 : -1)
    };
    res.status(200).send(retBooks);
});

router.delete('/', (req, res) => {
    if (books.length !== 0){
        books = [];
    }
    res.status(204).send();
});

module.exports = router;