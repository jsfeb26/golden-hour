export default {
  "GET_PHOTOS": (GEO, CONSUMER_KEY) => `https://api.500px.com/v1/photos/search?term=golden hour&tags=goldenhour,golden hour,sunset,sunrise&geo=${GEO}&image_size=600,4&sort=highest_rating&consumer_key=${CONSUMER_KEY}`,
  "GEOCODE": (ADDRESS) => `https://maps.googleapis.com/maps/api/geocode/json?address=${ADDRESS}`
};
