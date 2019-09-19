module.exports = function(db,app,ObjectID){
    //Route to delete a single item
    var result;
    app.post('/api/update',function(req,res){
        product = req.body;
        console.log(product);
        var objectid = product._id;
        const collection = db.collection('products');
        collection.updateOne({_id:objectid},{$set:{Name: product.Name, Description: product.Description, Price: product.Price, Units: product.Units}},()=>{
          //Return a response to the client to let them know the delete was successful
           res.send({'ok':product.objid});
       })

    });
        
    
}