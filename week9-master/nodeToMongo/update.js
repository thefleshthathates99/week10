module.exports = function(db){
    const collection = db.collection('products');

    collection.updateOne({_id: 3},{$set:{Name: "Update Name", Description:"Update Description", Price: 2.00, Units: 469}},()=>{
     })
    collection.find({}).toArray((err,data)=>{
        console.log(data)
   })
}

