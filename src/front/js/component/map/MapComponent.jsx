import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

const places = [
    {
        lat: -3.680740,
        long: 40.434810
    },

    {
        lat: -2.680740,
        long: 30.434810
    }
];

export const MapCompnent = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(-3.680740);
    const [lat] = useState(40.434810);
    const [zoom] = useState(14);
    const [API_KEY] = useState('api key here');

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
            center: [lng, lat],
            zoom: zoom
        });
        map.current.addControl(new maplibregl.NavigationControl(), 'top-right');


        for (let place of places) {
            new maplibregl.Marker({ color: "#FF037637600" })
                .setLngLat([place.lat, place.long])
                .addTo(map.current);

        }
    }, [API_KEY, lng, lat]);


    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
};
