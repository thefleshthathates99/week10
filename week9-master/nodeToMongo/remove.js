module.exports = function(db){
    const collection = db.collection('products');

    collection.deleteOne({_id: 2},(err,docs)=>{
    })
    collection.find({}).toArray((err,data)=>{
        console.log(data)
   })
}