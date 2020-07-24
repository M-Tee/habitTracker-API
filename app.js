const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();

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
