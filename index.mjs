// index.js
import express from "express";
import { client, connectDB } from "./db/conn.mjs"; 
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

let db; 

connectDB().then(() => {
  db = client.db("LeadManagement"); 

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

app.get("/leads", async (req, res) => {
  try {
    const leads = await db.collection("Lead").find().toArray();
    res.json(leads);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch leads" });
  }
});

app.post("/leads", async (req, res) => {
  try {
    const { name, email, status } = req.body;

    if (!name || !email || !status) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newLead = { name, email, status, createdAt: new Date() };
    const result = await db.collection("Lead").insertOne(newLead);

    const insertedLead = await db.collection("Lead").findOne({ _id: result.insertedId });

    res.status(201).json({ message: "Lead added successfully", lead: insertedLead });
  } catch (error) {
    console.error("Error adding lead:", error);
    res.status(500).json({ error: "Failed to add lead" });
  }
});

app.delete("/leads", async (req, res) => {
  try {
    const result = await db.collection("Lead").deleteMany({});
    res.json({ message: "All leads deleted successfully", deletedCount: result.deletedCount });
  } catch (error) {
    console.error(" Error deleting all leads:", error);
    res.status(500).json({ error: "Failed to delete all leads" });
  }
});
