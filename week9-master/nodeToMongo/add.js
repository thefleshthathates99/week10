module.exports = function(db){
      const collection = db.collection('products');
      dummyData = 
      [
        {_id: 1, Name: "Name1", Description: "Description for object1", Price: 3.50, Units: 123},
        {_id: 2, Name: "Name2", Description: "Description for object2", Price: 6.66, Units: 420},
        {_id: 3, Name: "Name3", Description: "Description for object3", Price: 6.90, Units: 12300}
      ]

      collection.insertMany(dummyData,(err,dbres)=>{
      })
}