module.exports = function(db,app){
        const collection = db.collection('products');
        collection.find({}).toArray((err,data)=>{
            console.log(data)
       })
}