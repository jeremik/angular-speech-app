const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/speech-management-app/dist'));
app.get('*', (req, res) => {
  res.sendFile(`./speech-management-app/dist/index.html`); // load the single view file (angular will handle the page changes on the front-end)
});
app.listen(process.env.PORT || 8080);
