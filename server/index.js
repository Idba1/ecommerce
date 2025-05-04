const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const { ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

//  CORS Configuration
const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

//  Root route
app.get('/', (req, res) => {
    res.send("Hello from Data Science Club Server..!!");
});

//  MongoDB connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kfk05.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        console.log(" Connected to MongoDB!");

        const collection = client.db("e-24").collection("collection");

        //  GET all collections
        app.get('/collection', async (req, res) => {
            const result = await collection.find().toArray();
            res.send(result);
        });

        app.get('/collection/:id', async (req, res) => {
            try {
                const { id } = req.params;
                const product = await collection.findOne({ _id: new ObjectId(id) });

                if (!product) {
                    return res.status(404).json({ error: "Product not found" });
                }

                res.json(product);
            } catch (error) {
                console.error("Error fetching product:", error);
                res.status(500).json({ error: "Server error", details: error.message });
            }

        });

        app.post('/collection', async (req, res) => {
            try {
                const product = req.body;

                // Optional: Add validations here

                const result = await client.db("e-24").collection("collection").insertOne(product);
                res.status(201).json({ insertedId: result.insertedId });
            } catch (err) {
                console.error("Error inserting product:", err);
                res.status(500).json({ error: "Failed to add product." });
            }
        });


    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
}

run();

//  Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
