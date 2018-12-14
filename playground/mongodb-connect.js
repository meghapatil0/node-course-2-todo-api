//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
var o=new ObjectID();
console.log(o);

MongoClient.connect('mongodb://localhost:27017/todo',(err,db)=>{

    if(err){
        console.log("unable to connect");
    }

    //console.log("connect");
  /*  db.collection('demo').insertOne({
        Name:"megha",
        age:20,
        completed:false,
        location:"Surat"
    },(err,res)=>{
        if(err){
            return console.log(err);
        }

      console.log(JSON.stringify(res.ops,undefined,2));
    });
*/
        db.close();
});