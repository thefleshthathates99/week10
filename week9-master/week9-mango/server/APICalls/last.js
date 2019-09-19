module.exports = function(db,app){
    app.get('/api/getLast',function(req,res){
        const collection = db.collection('products');
        collection.find({}).sort({$natural:-1}).limit(1).toArray((err,data)=>{
            
           res.send(data);
       })
    })
}