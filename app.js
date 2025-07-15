const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log("Request received at /");
  res.send('Welcome to DevBook! 🚀');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`DevBook app listening on port ${port}`);
});