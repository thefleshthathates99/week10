module.exports = function(db,app){
    app.post('/api/deleteitem',function(req,res){

        if (!req.body) {
            return res.sendStatus(400);
           }
           
           productID = req.body.productid;
           //var objectid = new ObjectID(productID);
           const collection = db.collection('products');
           collection.deleteOne({_id:productID},(err,docs)=>{

               res.send({ok:1});
           })
    })
}
 