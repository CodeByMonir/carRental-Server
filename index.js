const express = require('express');
const dotenv = require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();


app.use(express.json());
const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



async function run() {
  try {

    const db = client.db("CarServer");
    const carsCollection = db.collection("cars");
    const bookingCollection = db.collection("booking");


    // 
    app.get('/cars', async (req, res) => {
      const { search } = req.query;
     
      let cursor;
      if (search) {
        if (search === 'All') {
          cursor = carsCollection.find();
        } else {
          cursor = await carsCollection.find({
            $or: [
              {
                carName: {
                  $regex: search,
                  $options: 'i',
                },
              },
              {
                carType: {
                  $regex: search,
                  $options: 'i',
                },
              },
            ],
          });

        }

      }
      else {
        cursor = carsCollection.find();
      }

      const result = await cursor.toArray();
      res.send(result);
    })

  } finally {

  }

}


run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('Hello Boss!')
})





app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})