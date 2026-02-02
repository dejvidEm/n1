/**
 * Example Backend Endpoint for Google Reviews
 * 
 * This is an example of how to create a backend endpoint to fetch Google Reviews
 * without exposing your API key to the frontend.
 * 
 * IMPORTANT: This is just an example. You need to:
 * 1. Set up your own backend server (Node.js/Express, PHP, Python, etc.)
 * 2. Store GOOGLE_PLACE_ID and GOOGLE_API_KEY as environment variables on your server
 * 3. Deploy this endpoint to your backend
 * 4. Update VITE_GOOGLE_REVIEWS_API in your .env to point to this endpoint
 * 
 * Example usage with Express.js:
 */

// Install: npm install express node-fetch cors
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

// Get credentials from environment variables
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

app.get('/api/google-reviews', async (req, res) => {
  try {
    if (!GOOGLE_PLACE_ID || !GOOGLE_API_KEY) {
      return res.status(500).json({ 
        error: 'Google Place ID or API Key not configured' 
      });
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=name,rating,user_ratings_total,reviews&key=${GOOGLE_API_KEY}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status === 'OK' && data.result) {
      res.json(data);
    } else {
      res.status(400).json({ 
        error: data.error_message || 'Failed to fetch reviews',
        status: data.status 
      });
    }
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Example: Start server on port 3001
// app.listen(3001, () => {
//   console.log('Backend server running on http://localhost:3001');
// });

/**
 * For Vercel/Netlify serverless functions:
 * 
 * Create file: api/google-reviews.js
 * 
 * export default async function handler(req, res) {
 *   const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;
 *   const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
 *   
 *   try {
 *     const response = await fetch(
 *       `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=name,rating,user_ratings_total,reviews&key=${GOOGLE_API_KEY}`
 *     );
 *     const data = await response.json();
 *     res.json(data);
 *   } catch (error) {
 *     res.status(500).json({ error: 'Failed to fetch reviews' });
 *   }
 * }
 */
