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

router.route('/habits/:habitId')
  .get((req, res) => res.json(req.habit))
  .put((req, res) => {
    const { habit } = req;

    habit.title = req.body.title;
    habit.description = req.body.description;
    habit.done = req.body.done;

    habit.save((err) => {
      if (err) {
        return res.sendStatus(404);
      }
      return res.json(habit);
    })
  })
  .patch((req, res) => {
    const { habit } = req;

    if (!req.body._id) {
      delete req.body._id
    }
    Object.entries(req.body).forEach((property) => {
      const key = property[0];
      const value = property[1];
      habit[key] = value;
    })

    req.habit.save((err) => {
      if (err) {
        return res.sendStatus(404);
      }
      return res.json(habit);
    })
  })
  .delete((req, res) => {
    req.habit.remove((err) => {
      if (err) {
        return res.send(err);
      }
      return res.sendStatus(204);
    });
  });

app.use('/habittracker', router);

// app.get('/habits', (req, res) => {
//   res.send('Habit Tracker API');
// });

app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});
