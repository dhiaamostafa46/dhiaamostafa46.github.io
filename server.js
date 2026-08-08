const express = require('express');
const path = require('path');
const contactHandler = require('./api/contact.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle API route locally
app.post('/api/contact', async (req, res) => {
  await contactHandler(req, res);
});

// Serve static frontend assets
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`🚀 Dhiaa Mostafa Portfolio Backend Server Running!`);
  console.log(`🌐 Local URL: http://localhost:${PORT}`);
  console.log(`📧 Intake API Endpoint: http://localhost:${PORT}/api/contact`);
  console.log(`==================================================\n`);
});
