
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jaiswaljanya:SDP123›@currycares.rsaraqd.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });

    // Get the database and collection on which to run the operation
    const db = client.db("CurryCares");
    const col = db.collection("BackendDB");
      
    // Create new documents                                                                                                                                         
      const restaurants = [{
            "Restaurant":"Spice Tales",
            "Items": { "Dish": "Biryani", "Price": "350Rs" },
            "Img": "rest1.png"
      },
          {
            "Restaurant":"Pizza Hut",
            "Items": { "Dish": "Pepperoni Pizza", "Price": "500Rs" },
            "Img": "rest2.png"
          
      }]
      
       // Insert the documents into the specified collection        
      const p = await col.insertOne(restaurants);
      // Find the document
      const filter = { "Items.Price": "350" };
      const document = await col.findOne(filter);
      // Print results
      console.log("Document found:\n" + JSON.stringify(document));
      
     } catch (err) {
      console.log(err.stack);
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
