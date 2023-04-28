const express = require("express");
const { Pool } = require("pg");
const app = express();
const port = 3000;

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });

app.get("/", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM example_table");
    res.json(result.rows);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error fetching data");
  }
});

app.get("/insert", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(
      "INSERT INTO example_table (id, name) VALUES (5, 'bau')"
    );
    res.json(result.rows);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error fetching data");
  }
});

app.post("/", async (req, res) => {
  try {
    res.json({ test: "messaggio2" });
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error fetching data");
  }
});

app.listen(port, () => {
  console.log(`Node app listening at http://localhost:${port}`);
});
