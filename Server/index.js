// index.js
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const Connection=require('./DataBase/Connection/Connection')
dotenv.config();
const cors = require('cors');
const port = process.env.PORT || 8080;
const communityRewardsRoute = require('./Routes/Community-Rewards-Claim');
Connection();

// CORS Policy
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});


app.use(cors({
  origin: 'http://localhost:3000',
  methods: ["GET", "POST"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}));

//All  Routes
app.use('/', communityRewardsRoute);

app.get('/', (req, res) => {
  res.json({ message: "Server running at port " + port });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});