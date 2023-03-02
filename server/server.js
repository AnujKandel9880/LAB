const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const { MongoClient } = require('mongodb')

const uri ="mongodb+srv://aman:aman@cluster0.vfj0out.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
client.connect();
var db = client.db("In-Sem");
// var col = client.db("Exam");

<<<<<<< HEAD
// register into mongoDB
app.post('/insert_stu',(req,res)=>{
  col =db.collection("Exam")
  console.log(req.body)
  col.insertOne(req.body)
  res.send(req.body)
=======
// // registration form data
// const db = client.db("s16");
// const col = db.collection("user");


var db = client.db("Rental");
var col = db.collection("Registration");
var col1=db.collection("stu_data");

///registration form data
app.post('/insert',(request,response) => {
  response.send(request.body);
  console.log(request.body)
  col.insertOne(request.body)
  console.log("Documents Inserted");
>>>>>>> 476443266db368e3775c04106353cfd977195520

})
app.get('/show_one_stu',(req,res)=>{
  async function find(){
    try{
      const result=await col.findOne()
      console.log(result)
      if(result==null)
      {
        res.send({"Data_retrieval":"Fail"})
      }else{
          res.send(result);
        }
      }
      finally{}
    }
    find().catch(console.dir)
  })

<<<<<<< HEAD
  app.get('/show_all',(req,res)=>{
    async function find(){
      try{
        const result=await col.find().toArray()
        console.log(result)
        if(result==null)
        {
          res.send({"Data_retrieval":"Fail"})
        }else{
            res.send(result);
          }
        }
        finally{}
      }
      find().catch(console.dir)
    })

    app.get('/show_all_gt1',(req,res)=>{
      async function find(){
        try{
          const result=await col.find({stu_id:{$gte:1},$or:[{stu_dept:"CSE"},{stu_dept:"ECE"}]}).toArray()
          console.log(result)
          if(result==null)
          {
            res.send({"Data_retrieval":"Fail"})
          }else{
              res.send(result);
            }
          }
          finally{}
        }
        find().catch(console.dir)
      })

  
app.listen(8082)
=======
// Ex5 form data
app.post('/insert_stu',(req,res)=>{
  col1 =db.collection("Ex5")
  console.log(req.body)
  col1.insertOne(req.body)
  res.send(req.body)

})
app.get('/show_one_stu',(req,res)=>{
  async function find(){
    try{
      const result=await col1.findOne()
      if(result==null)
      {
        res.send({"Data_retrieval":"Fail"})
      }else{
          res.send(result);
        }
      }
      finally{}
    }
    find().catch(console.dir)
  })
app.listen(8081)
>>>>>>> 476443266db368e3775c04106353cfd977195520
//localhost:8081
console.log("server started")