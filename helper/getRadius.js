export default ({ center , ne }) => {
  if (center && ne && window.google) {
    // Calculate radius (in meters).
    return google.maps.geometry.spherical.computeDistanceBetween(center, ne);
  }
};
