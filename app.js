const express = require('express');
const mongoose = require ('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();
const db = mongoose.connect('mongodb://localhost/habittracker');
const Habit = require('./models/habitModel');

router.route('/habits')
  .get((req, res) => {
    const response = 'My api';
    return res.json(response);
  })
  .post();

app.use('/habittracker', router);

// app.get('/habits', (req, res) => {
//   res.send('Habit Tracker API');
// });

app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});
