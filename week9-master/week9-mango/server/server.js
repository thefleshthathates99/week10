const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
var  ObjectID = require('mongodb').ObjectID;


app.use(cors());
app.use (bodyParser.json());
const url = 'mongodb://localhost:27017';


MongoClient.connect(url, {poolSize:10,useNewUrlParser: true,useUnifiedTopology: true},function(err, client) {
    if (err) {return console.log(err)}
        const dbName = 'week9db';
        const db = client.db(dbName);
        require('./APICalls/add.js')(db, app);
        require('./APICalls/addNew.js')(db, app);
        require('./APICalls/read.js')(db, app);
        require('./APICalls/last.js')(db, app);
        require('./APICalls/remove.js')(db, app, ObjectID);
        require('./APICalls/update.js')(db, app, ObjectID);
        require('./APICalls/specItem.js')(db, app, ObjectID);
        require('./listen.js')(http);

});

module.exports = app;
