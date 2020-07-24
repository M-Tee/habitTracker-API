const express = require('express');

const app = express();
const port = 3000;
const router = express.Router();

router.route('/habits')
  .get()
  .post();

app.get('/', (req, res) => {
  res.send('Habit Tracker API');
});

app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});
