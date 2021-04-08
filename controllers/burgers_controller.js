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
  console.log(req)
  burgerModel.create(req.body.burgerName, (result) => {
    // Send back the ID of the new quote
    res.json({ burgerName: result.burgerName }); 
  });
});

router.put('/api/burgers/:id', (req, res) => {
  const whichOne = `id = ${req.params.id}`;
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
  const whichOne = `id = ${req.params.id}`;
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
