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
    serverApi: ServerApiVersion.v1,
});

async function run() {
    try {
        // await client.connect();

        const db = client.db("e-24");
        const collection = db.collection("collection");
        const cartCollection = db.collection("cart");
        const ordersCollection = db.collection("orders");

        // =====================
        // === Cart Routes ===
        // =====================

        // Get cart items by user email
        app.get("/cart", async (req, res) => {
            const email = req.query.email;
            if (!email) {
                return res.status(400).send({ message: "Missing email" });
            }
            const items = await cartCollection.find({ userEmail: email }).toArray();
            res.send(items);
        });

        // Add item to cart
        app.post("/cart", async (req, res) => {
            const item = req.body;
            const result = await cartCollection.insertOne(item);
            res.send(result);
        });

        // Update quantity
        app.patch('/cart/:id', async (req, res) => {
            const { id } = req.params;
            const { quantity } = req.body;
            const result = await cartCollection.updateOne(
                { _id: new ObjectId(id) },
                { $set: { quantity } }
            );
            res.send(result);
        });

        // Remove item from cart
        app.delete('/cart/:id', async (req, res) => {
            const { id } = req.params;
            const result = await cartCollection.deleteOne({ _id: new ObjectId(id) });
            res.send(result);
        });

        // ============================
        // === Product Collection ===
        // ============================

        // Get all products
        app.get('/collection', async (req, res) => {
            const result = await collection.find().toArray();
            res.send(result);
        });

        // Get single product by ID
        app.get('/collection/:id', async (req, res) => {
            const { id } = req.params;
            const result = await collection.findOne({ _id: new ObjectId(id) });
            res.send(result);
        });

        // Add a new product
        app.post('/collection', async (req, res) => {
            const newProduct = req.body;
            const result = await collection.insertOne(newProduct);
            res.send(result);
        });

        // Delete a product (admin)
        app.delete('/collection/:id', async (req, res) => {
            const { id } = req.params;
            const result = await collection.deleteOne({ _id: new ObjectId(id) });
            res.send(result);
        });

        // Update product
        app.put('/collection/:id', async (req, res) => {
            const { id } = req.params;
            const updatedProduct = req.body;

            const result = await collection.updateOne(
                { _id: new ObjectId(id) },
                { $set: updatedProduct }
            );

            res.send(result);
        });

        app.put('/collection/:id', async (req, res) => {
            const { id } = req.params;
            const updateDoc = { $set: req.body };
            const result = await collection.updateOne({ _id: new ObjectId(id) }, updateDoc);
            res.send(result);
        });

        // =====================
        // === Orders Routes ===
        // =====================

        // Get all orders (admin)
        app.get("/orders", async (req, res) => {
            const result = await ordersCollection.find().toArray();
            res.send(result);
        });

        // Place a new order
        app.post("/orders", async (req, res) => {
            const order = req.body;
            const result = await ordersCollection.insertOne(order);
            res.send(result);
        });

        // console.log("✅ Connected to MongoDB successfully");

    } catch (err) {
        console.error("❌ MongoDB error:", err);
    }
}

run();

app.get("/", (req, res) => {
    res.send("E-24 API is running");
});

app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});