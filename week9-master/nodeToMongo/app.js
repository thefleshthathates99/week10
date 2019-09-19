const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {poolSize:10,useNewUrlParser: true,useUnifiedTopology: true},function(err, client) {
    if (err) {return console.log(err)}
        const dbName = 'mydb';
        const db = client.db(dbName);
        require('./add.js')(db);
        require('./read.js')(db);
        require('./remove.js')(db);
        require('./update.js')(db);

});
