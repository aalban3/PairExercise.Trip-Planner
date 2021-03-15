/* eslint-disable func-names */
import mapboxgl from "mapbox-gl";
const typeIcons = {
  restaurant: "http://i.imgur.com/cqR6pUI.png",
  hotel: "http://i.imgur.com/D9574Cu.png",
  activity: "http://i.imgur.com/WbMOfMl.png",
};
const addMarker = function (type, coord) {
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${typeIcons[type]})`;
  return new mapboxgl.Marker(markerDomEl).setLngLat(coord);
};

export default addMarker;
