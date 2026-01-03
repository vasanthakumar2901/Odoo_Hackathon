const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// In-memory data storage
let destinations = [];

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running - ENJOY THE WORLD API");
});

// Add destination (new trip)
app.post("/api/destinations", (req, res) => {
  const { name, location, startDate, endDate, createdBy } = req.body;
  const newDestination = {
    id: destinations.length + 1,
    name: name || `Trip to ${location}`,
    location: location || 'Unknown',
    startDate: startDate || '',
    endDate: endDate || '',
    createdBy: createdBy || 'anonymous',
    createdAt: new Date().toISOString()
  };
  destinations.push(newDestination);
  console.log('Trip added:', newDestination);
  res.json({ message: "Trip added successfully", destination: newDestination });
});

// Get all destinations/trips
app.get("/api/destinations", (req, res) => {
  const search = req.query.search ? req.query.search.toLowerCase() : '';
  
  if (search) {
    const filtered = destinations.filter(d => 
      (d.name && d.name.toLowerCase().includes(search)) ||
      (d.location && d.location.toLowerCase().includes(search)) ||
      (d.createdBy && d.createdBy.toLowerCase().includes(search))
    );
    return res.json(filtered);
  }
  
  res.json(destinations);
});

// Get single destination
app.get("/api/destinations/:id", (req, res) => {
  const dest = destinations.find(d => d.id === parseInt(req.params.id));
  if (dest) {
    res.json(dest);
  } else {
    res.status(404).json({ message: "Destination not found" });
  }
});

// Update destination
app.put("/api/destinations/:id", (req, res) => {
  const dest = destinations.find(d => d.id === parseInt(req.params.id));
  if (dest) {
    Object.assign(dest, req.body);
    res.json({ message: "Destination updated", destination: dest });
  } else {
    res.status(404).json({ message: "Destination not found" });
  }
});

// Delete destination
app.delete("/api/destinations/:id", (req, res) => {
  const index = destinations.findIndex(d => d.id === parseInt(req.params.id));
  if (index !== -1) {
    const deleted = destinations.splice(index, 1);
    res.json({ message: "Destination deleted", destination: deleted[0] });
  } else {
    res.status(404).json({ message: "Destination not found" });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n🌍 ENJOY THE WORLD Backend API running on http://localhost:${PORT}`);
  console.log(`📍 POST /api/destinations - Create new trip`);
  console.log(`📍 GET /api/destinations - Get all trips`);
  console.log(`📍 GET /api/destinations?search=place - Search trips\n`);
});
