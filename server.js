const express = require('express');

const app = express();

app.use(express.static('./dist/speech-management-app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/speech-management-app/'}),
);

app.listen(process.env.PORT || 8080);
