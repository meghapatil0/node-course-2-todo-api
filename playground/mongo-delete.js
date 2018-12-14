//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
var o=new ObjectID();
//console.log(o);

MongoClient.connect('mongodb://localhost:27017/todo',(err,db)=>{

    if(err){
        console.log("unable to connect");
    }


   // db.collection('to').deleteMany({Name:"megha"}).then((res)=>{
   //      console.log(res+"deleted suvvessful");
   // })
   //
    db.collection('to').findOneAndDelete({Name:"VIdhi"}).then((res)=>{
       console.log("delete"+res);
    });
});

