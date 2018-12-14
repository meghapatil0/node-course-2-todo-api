//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
var o=new ObjectID();
//console.log(o);

MongoClient.connect('mongodb://localhost:27017/todo',(err,db)=>{

    if(err){
        console.log("unable to connect");
    }

 /* db.collection('to').find({Name:"megha"}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs));

  },(err)=>{
        console.log(err);
    });
    //db.close();
    */
 //
 // db.collection('to').find().count().then((count)=>{
 //     console.log(count);
 // },(err)=>{
 //     console.log(err);
 // });

    db.collection('to').find({Name:"megha"}).count().then((cnt)=>{
       console.log(cnt);
    },(err)=>{
        console.log(err);
    });

    db.collection('to').find({Name:"megha"}).toArray().then((cnt)=>{
        console.log(JSON.stringify(cnt,undefined,2));
    },(err)=>{
        console.log(err);

    });
});

