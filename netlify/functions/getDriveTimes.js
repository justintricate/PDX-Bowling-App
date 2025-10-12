// File: netlify/functions/getDriveTimes.js
export async function handler(event) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Missing Google Maps API key" }),
    };
  }

  const { origin, destinations } = JSON.parse(event.body || "{}");
  if (!origin || !destinations) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing origin or destinations" }),
    };
  }

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
    origin
  )}&destinations=${encodeURIComponent(destinations)}&key=${apiKey}&units=imperial`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
}