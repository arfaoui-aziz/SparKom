import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
export default function GeoLocation() {
  const mapContainer = useRef();
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [10.215553199999999, 36.865620299999996],
      zoom: 9,
    });
    var marker = new mapboxgl.Marker({ color: "red" })
      .setLngLat([10.215553199999999, 36.865620299999996])
      .addTo(map);
    return () => map.remove();
  }, []);
  return (
    <div>
      <div
        className="map-container"
        style={{
          width: 400,
          height: 400,
        }}
        ref={mapContainer}
      />
    </div>
  );
}
