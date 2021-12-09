//CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectId } = require("mongodb");

// Connection URL
const connectionURL = "mongodb://127.0.0.1:27017";
// Database Name
const databaseName = "task-manager";

// const id = new ObjectId();
// console.log(id);
// console.log(id.id.length);
// console.log(id.toHexString.length);
// console.log(id.getTimestamp());
// console.log(id.toString());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log("Unable to connect to database!");
    }
    // create database
    const db = client.db(databaseName);

    // ------------Insert---------------

    // insert only single data
    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Sam",
    //     age: 10,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user!");
    //     }
    //     console.log(result.insertedId);
    //   }
    // );

    // insert multiple data
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Mike",
    //       age: 17,
    //     },
    //     {
    //       name: "Vikram",
    //       age: 17,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert users!");
    //     }
    //     console.log(result.insertedIds);
    //   }
    // );

    // insert multiple tasks
    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Clean the house",
    //       completed: true,
    //     },
    //     {
    //       description: "Complete the course",
    //       completed: false,
    //     },
    //     {
    //       description: "Pack the bag",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert tasks!");
    //     }
    //     console.log(result.insertedIds);
    //   }
    // );

    // ------------Read---------------

    // Get one user
    // db.collection("users").findOne({ name: "Sam" }, (error, user) => {
    //   if (error) {
    //     return console.log("Unable to get user!");
    //   }
    //   console.log(user);
    // });

    // Get multiple user
    // db.collection("users")
    //   .find({ age: 10 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ age: 10 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // Get all user
    // db.collection("users")
    //   .find({})
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    //get last task by id
    // db.collection("tasks").findOne(
    //   { _id: new ObjectId("61b1a50b85bc082784e88458") },
    //   (error, task) => {
    //     console.log(task);
    //   }
    // );

    // get task which are not completed
    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     console.log(tasks);
    //   });

    // ------------Update---------------

    // update single user
    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectId("61b1a933143fc4d8b854160e"),
    //     },
    //     {
    //       // $set: {
    //       //   name: "Mayank",
    //       // },
    //       $inc: {
    //         age: 2,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // update multiple
    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       completed: false,
    //     },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // ------------Delete---------------

    // delete multiple data at time
    // db.collection("users")
    //   .deleteMany({
    //     age: 17,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // delete single task only
    // db.collection("tasks")
    //   .deleteOne({
    //     description: "Pack the bag",
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
);
