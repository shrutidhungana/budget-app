const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname,'..', 'public')

app.use(express.static());

app.listen(3000, () => {
  console.log('server is up')  
})
