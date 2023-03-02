//program to insert one document in MongoDB


// const { MongoClient } = require("mongodb");
// const uri ="mongodb+srv://aman:aman@cluster0.vfj0out.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);
// async function run() {
// try {
// await client.connect;
// const database = client.db("first");
// const fc = database.collection("student");
// const doc = { name: "srithar", dept: "cse", course: "mswd"};
// const result = await fc.insertOne(doc);
// console.log ('insert success');
// } finally {
// await client.close();
// }
// } 
// run().catch(console.dir);


//program to insert many document in MongoDB

const { MongoClient } = require("mongodb");
const uri ="mongodb+srv://aman:aman@cluster0.vfj0out.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
try {
await client.connect;
const database = client.db("first");
const fc = database.collection("student");
const doc = [ 
  {name: "srithar", dept: "cse", course: "mswd", marks:100},
  {name: "Aman", dept: "cse-honors", course: "pfsd",marks:99},
  {name: "Rajesh", dept: "bt", course: "biotech",marks:98},
  {name: "Anuj", dept: "eee", course: "electricity",marks:97},
  {name: "Sambandha", dept: "civil", course: "construction",marks:96},
  {name: "Sushant", dept: "me", course: "mechanics",marks:95},
];
const result = await fc.insertMany(doc);
console.log ('documents were inserted');
} finally {
await client.close();
}
} 
run().catch(console.dir);

//program to find document in MongoDB

/* const { MongoClient } = require("mongodb");
const uri ="mongodb+srv://aman:aman@cluster0.vfj0out.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
try {
await client.connect;
const database = client.db("first");
const fc = database.collection("student");
const filter={dept:"me"};
const result=await fc.findOne(filter);
console.log(result);
} finally {
await client.close();
}
} 
run().catch(console.dir); */


//program to deleteOne document in MongoDB
// const { MongoClient } = require("mongodb");
// const uri ="mongodb+srv://aman:aman@cluster0.vfj0out.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);
// async function run() {
// try {
// await client.connect;
// const database = client.db("first");
// const fc = database.collection("student");
// const filter={ dept:"cse"};
// const result=await fc.deleteOne(filter);
// console.log("document was deleted");
// } finally {
// await client.close();
// }
// } 
// run().catch(console.dir);




//program to delte Many document in MongoDB

// const { MongoClient } = require("mongodb");
// const uri ="mongodb+srv://aman:aman@cluster0.vfj0out.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);
// async function run() {
// try {
// await client.connect;
// const database = client.db("first");
// const fc = database.collection("student");
// const filter={ name:"srithar"};
// const result=await fc.deleteMany(filter);
// console.log("documents were deleted");
// } finally {
// await client.close();
// }
// } 
// run().catch(console.dir);



//program to replace one document in MongoDB
// const { MongoClient } = require("mongodb");
// const uri ="mongodb+srv://aman:aman@cluster0.vfj0out.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);
// async function run() {
// try {
// await client.connect;
// const database = client.db("first");
// const fc = database.collection("student");
// const filter = { name: "srithar" };
// const doc = {
// name: "suresh",
// dept: "CSE", 
// course: "Adv. Java",
// marks:"100"
// };
// const result = await fc. replaceOne(filter, doc);
// console.log("documents were replaced");
// } finally {
// await client.close();
// }
// } 
// run().catch(console.dir);


// program to update one document in MongoDB
  // const { MongoClient } = require("mongodb");
// const uri ="mongodb+srv://aman:aman@cluster0.vfj0out.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);
// async function run() {
// try {
// await client.connect;
// const database = client.db("first");
// const fc = database.collection("student");
// const filter = { name: "srithar" };
// const doc = {
// $set: {dept: "BT" }, };
// const result = await fc.updateOne(filter, doc);
// console.log ("documents were updated");
// } finally {
// await client.close();
// }
// } 
// run().catch(console.dir);



//program to update many document in MongoDB
// const { MongoClient } = require("mongodb");
// const uri ="mongodb+srv://aman:aman@cluster0.vfj0out.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);
// async function run() {
// try {
// await client.connect;
// const database = client.db("first");
// const fc = database.collection("student");
// const filter = { course: "mswd" };
// const doc = {
// $set: { dept: "BT1" }, };
// const result = await fc. updateMany(filter, doc);
// console.log("documents were updated");
// } finally {
// await client.close();
// }
// } 
// run().catch(console.dir);



//program to sort document in MongoDB


// const { MongoClient } = require("mongodb");
// const uri ="mongodb+srv://aman:aman@cluster0.vfj0out.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);
// async function run() {
// try {
// await client.connect;
// const database = client.db("first");
// const fc = database.collection("student");
// const filter = { dept:"cse"};
// const sort = { marks: -1 }; // Sort in descending order by marks
// const result = await fc.find(filter).sort(sort).limit(1).toArray();
// console.log(result[0]);
// } finally {
// await client.close();
// }
// } 
// run().catch(console.dir);

// program to sort based on marks below

// const { MongoClient } = require("mongodb");
// const uri ="mongodb+srv://aman:aman@cluster0.vfj0out.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);
// async function run() {
// try {
// await client.connect;
// const database = client.db("first");
// const fc = database.collection("student");
//   const filter = { marks: { $gte: 97, $lte: 100 } }; // Filter for marks between 80 and 90
//   const results = await fc.find(filter).toArray();
//   console.log(results);
// } finally {
// await client.close();
// }
// } 
// run().catch(console.dir);

