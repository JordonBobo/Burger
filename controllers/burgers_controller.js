const express = require('express')
const burgerModel = require('../models/burger')
const router = express.Router();
const exphbs = require('express-handlebars');

// const path =require('path');
// const source = path.join(__dirname, '../views/index.handlebars')




// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
  burgerModel.all((data) => {
    res.render('index', {
      x: data,
    });
  });
});

router.post('/api/burger', (req, res) => {
  console.log(req.body.burgerName)
  burgerModel.create(req.body.burgerName, (result) => {
    // Send back the ID of the new quote
    // console.log(result)
    res.json({ id: result.insertId }); 
  });
});

router.put('/api/burger/:id', (req, res) => {
  const whichOne = `${req.params.id}`;
  burgerModel.update(whichOne,(result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete('/api/burger/:id', (req, res) => {
  const whichOne = `${req.params.id}`;
  burgerModel.delete(whichOne, (result) => {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// Export routes for server.js to use.
module.exports = router
