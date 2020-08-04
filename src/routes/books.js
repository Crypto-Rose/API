const { Router } = require('express');
const router = Router();
const _ = require('underscore')
const books = require('../sample.json');

router.get('/',(req,res) => {
    res.json(books)
})

router.post('/',(req,res) => {
    const {title,author,year,genus} = req.body;
    if(title && author && year && genus){
        const id = books.length + 1
        const newBook = {...req.body,id}
        books.push(newBook)
        res.json(books);
    }else{
        res.status(500).json({error: 'There was an error'})
    }
   
});

router.put('/:id',(req,res) => {
    const { id } = req.params;
    const {title,author,year,genus} = req.body;
    if(title && author && year && genus){
        _.each(books,(book,i) => {
            if(book.id == id){
                book.title = title;
                book.author = author;
                book.year = year;
                book.genus = genus;
            }
        });
        res.json(books)
    } else {
        res.status(404).json({error: 'All required.'})
    }
})

router.delete('/:id', (req, res) => {
    const  { id }  = req.params;
    
    _.each(books,(book,i) => {
        if(book.id == id){
            books.splice(i,1);
        }
    });
    res.send(books)
});
module.exports = router;