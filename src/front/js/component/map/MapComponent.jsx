import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';
import { places } from './jsonCalls/vetCall-1.js';
import { registeredVet } from './jsonCalls/vetCall-2.js';



export const MapComponent = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(-74.00597);
    const [lat] = useState(40.71427); 
    const [zoom] = useState(12);
    const [API_KEY] = useState('6EQmKaS0rvlVuV87v1aZ');

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
            center: [lng, lat],
            zoom: zoom
        });
        map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    places.forEach(place => {
        new maplibregl.Marker({ color: "#FF037637600" })
        .setLngLat([place.longitude, place.latitude])
        .addTo(map.current);

    })
    registeredVet.forEach(vet => {
        new maplibregl.Marker({ color: "#FFC000" })
        .setLngLat([vet.longitude, vet.latitude])
        .addTo(map.current);
    })
    

        
    }, [API_KEY, lng, lat]);


    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
};
