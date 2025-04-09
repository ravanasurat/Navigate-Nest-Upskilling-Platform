const express = require('express');
const cors = require('cors');
const fs = require('fs');
const csvParser = require('csv-parser');
const path = require('path');
const chatRoutes = require('./routes/chatRoutes');

// Create two separate Express applications
const dataApp = express();
const chatApp = express();

// Define ports
const DATA_PORT = process.env.DATA_PORT || 3000;
const CHAT_PORT = process.env.CHAT_PORT || 5000;

// Enable CORS for both applications
dataApp.use(cors());
dataApp.use(express.json());
chatApp.use(cors());
chatApp.use(express.json());

// Endpoint to serve the CSV data as JSON (on dataApp)
dataApp.get('/api/labor-data', (req, res) => {
  const csvFilePath = 'C:\\Users\\MAHE\\Downloads\\labour_market_trends_DRASTIC.csv';
  const results = [];

  // Create readable stream from CSV file
  fs.createReadStream(csvFilePath)
    .on('error', (error) => {
      console.error('Error reading file:', error);
      return res.status(500).send({ error: 'Failed to read CSV file' });
    })
    .pipe(csvParser())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res.json(results);
    })
    .on('error', (error) => {
      console.error('Error parsing CSV:', error);
      return res.status(500).send({ error: 'Failed to parse CSV file' });
    });
});

// Chat routes (on chatApp)
chatApp.use("/api/chat", chatRoutes);

// Start both servers
dataApp.listen(DATA_PORT, () => {
  console.log(`🚀 Data Server running on port ${DATA_PORT}`);
  console.log(`CSV data available at http://localhost:${DATA_PORT}/api/labor-data`);
});

chatApp.listen(CHAT_PORT, () => {
  console.log(`🚀 Chat Server running on port ${CHAT_PORT}`);
  console.log(`Chat API available at http://localhost:${CHAT_PORT}/api/chat`);
});