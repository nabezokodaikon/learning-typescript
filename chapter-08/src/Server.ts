const path = require('path');
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Running at Port 3000...');
});

app.use(express.static(path.join(__dirname, './')))
