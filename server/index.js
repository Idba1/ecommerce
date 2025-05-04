const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kfk05.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
    serverApi: ServerApiVersion.v1, // ✅ only this
});

async function run() {
    try {
        await client.connect();
        const collection = client.db("e-24").collection("collection");

        app.get('/collection', async (req, res) => {
            const result = await collection.find().toArray();
            res.send(result);
        });

        app.get('/collection/:id', async (req, res) => {
            const { id } = req.params;
            const result = await collection.findOne({ _id: new ObjectId(id) });
            res.send(result);
        });

        app.post('/collection', async (req, res) => {
            const newProduct = req.body;
            const result = await collection.insertOne(newProduct);
            res.send(result);
        });

        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("MongoDB error:", err);
    }
}
run();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
