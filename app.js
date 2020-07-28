const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();
const db = mongoose.connect('mongodb://localhost/habittracker');
const Habit = require('./models/habitModel');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.route('/habits')
  .get((req, res) => {
    Habit.find((err, habits) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(habits);
      }
    });  
  })
  .post((req, res) => {
    const habit = new Habit(req.body);

    habit.save((err) => {
      if (err) {
        return res.sendStatus(404);
      }
      return res.json(habit);
    })
  });

router.use('/habits/:habitId', (req, res, next) => {
  Habit.findById(req.params.habitId, (err, habit) => {
    if (err) {
      return res.send(err);
    }
    if (habit) {
      req.habit = habit;
      return next();
    }
    return res.sendStatus(404);
  })
});


app.use('/habittracker', router);

// app.get('/habits', (req, res) => {
//   res.send('Habit Tracker API');
// });

app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});
