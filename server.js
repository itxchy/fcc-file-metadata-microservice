const compression  = require('compression');
const multer       = require('multer');
const express      = require('express');
const app          = express();

app.use(compression());

app.use('/', express.static(__dirname + '/public'));
app.use(require('./controllers'));

var server = app.listen(process.env.PORT || 4000, () => {
    console.log('\n\t\u2713 Express app listening...');
});

module.exports = server;
