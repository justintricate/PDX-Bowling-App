// File: netlify/functions/getAutocomplete.js

const fetch = require('node-fetch');

exports.handler = async function (event) {
  // Get the input text from the front-end request
  const { input } = JSON.parse(event.body);

  // Securely get the API key from your Netlify environment variables
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
    input
  )}&key=${apiKey}&types=address&components=country:us`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to fetch autocomplete suggestions',
      }),
    };
  }
};
