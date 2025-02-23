const express = require('express');
const app = express();

app.use(express.json({ extended: false }));
app.use(express.static('./view'));
app.set('view engine', 'ejs');
app.set('views', './view');

app.get('/', (require, response) => {
  return response.render('index');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
