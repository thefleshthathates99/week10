module.exports = function(db,app){
    //Route to manage adding a product
  
    app.post('/api/add',function(req,res){
      
      
        if (!req.body) {
         return res.sendStatus(400)
        }
        product = req.body;
        const collection = db.collection('products');
        //check for duplicate id's
        collection.insertOne(product)
        res.send(product)
    });
       
    
    }