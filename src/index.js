/* eslint-disable quotes */
import mapboxgl from "mapbox-gl";
import addMarker from './marker';
// import dotenv from "dotenv";
// dotenv.config({ silent: process.env.NODE_ENV === 'production' });
// require('dotenv').config();
mapboxgl.accessToken = 'pk.eyJ1IjoiYWFsYmFuIiwiYSI6ImNrbWFyaXVyZDE1Zzcyb3FmOTV6Y2MwZmQifQ.Ff79O-RvD7G-Hh3FcSN5Lw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10", // mapbox has lots of different map styles available.
});
const fullStack = [-74.009151, 40.705086];

const marker = addMarker('restaurant', fullStack);
marker.addTo(map);
