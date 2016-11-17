/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var booksRouter = express.Router();
  var books = [
    {
      id: 1,
      title: 'Hamlet',
      author: 'x',
      description: 'bla bla bla'

    },
    {
      id: 2,
      title: 'Star Wars',
      author: 'y',
      description: 'bla bla bla'

    },
    {
      id: 3,
      title: '1984',
      author: 'z',
      description: 'bla bla bla'

    }
  ]

  booksRouter.get('/', function(req, res) {
    res.send({
      'books': books
      //'books': []
    });
  });

  booksRouter.post('/', function(req, res) {
    var newBook = req.body.book;
    var newId = books.length + 1;
    newBook.id = newId;
    books.push(newBook);  
    
    res.send({
      'books': {
        id:req.params.id
      }
    });
    
    //res.status(201).end();
  });

  booksRouter.get('/:id', function(req, res) {
    res.send({
      'books': {
        id: req.params.id
      }
    });
  });

  booksRouter.put('/:id', function(req, res) {
    res.send({
      'books': {
        id: req.params.id
      }
    });
  });

  booksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/books', require('body-parser').json());
  app.use('/api/books', booksRouter);
};
