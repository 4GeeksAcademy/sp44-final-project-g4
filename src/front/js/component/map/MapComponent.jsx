import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';
import { vets } from './jsonCalls/vetCall-1.js';
import { groomers } from './jsonCalls/groomerCall-1';
import { walkers } from './jsonCalls/walkerCall-1';



const MapComponent = ({ type }) => {

    const professionalList = useRef([]);
    const registeredProfessional = useRef([]);
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(-74.00597);
    const [lat] = useState(40.71427);
    const [zoom] = useState(10);
    const [API_KEY] = useState('6EQmKaS0rvlVuV87v1aZ ');

    useEffect(() => {
        if (type === "vet") {
            professionalList.current = vets;
            registeredProfessional.current = JSON.parse(localStorage.getItem("vets"));
        }
        else if (type === "walker") {
            professionalList.current = walkers;
            registeredProfessional.current = JSON.parse(localStorage.getItem("walkers"));
        }
        else if (type === "groomer") {
            professionalList.current = groomers;
            registeredProfessional.current = JSON.parse(localStorage.getItem("groomers"));
        }

    }, [type, mapContainer]);


    useEffect(() => {
        // if ( map.current ) return; // stops map from intializing more than once


        // if(type === 'vet') {

        // }
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
            center: [lng, lat],
            zoom: zoom
        });
        map.current.addControl(new maplibregl.NavigationControl(), 'top-right');



        professionalList?.current.forEach(professional => {
            const popup = new maplibregl.Popup({ offset: 25 }).setHTML(
                `<div className="card text-center">
                    <div className="card-header">
                    <h3>
                    ${professional.title}
                    </h3>
                    </div>
                    <div className="card-body">
                    <div>
                    <label htmlFor=""> <strong>Location</strong> </label>
                    <p className="card-title">${professional.address}</p>
                    </div>
                    <div>
                    <label htmlFor=""> <strong>Contact</strong> </label>
                    <p className="card-title">${professional.phoneNumber}</p>
                    </div>
                    <div>
                    <label htmlFor=""> <strong>Website</strong> </label>
                    <p className="card-title">${professional.website}</p>
                </div>`
            );
            new maplibregl.Marker({ color: "#FF037637600" })
                .setLngLat([professional.longitude, professional.latitude])
                .setPopup(popup)
                .addTo(map.current);

        });

        registeredProfessional?.current.forEach(professional => {
            const popup = new maplibregl.Popup({ offset: 25 }).setHTML(
                `
            <strong>Name:</strong> ${professional.name, professional.last_name}
            <br>
            <strong>Location:</strong> ${professional.address}
            <br>
            <strong>Company Name:</strong> ${professional.company_name}
            <br>
            <strong>Brief:</strong>  ${professional.description}
            <br>
            <strong>Email:</strong>:  ${professional.email}
            <br>
            <strong>Contact:</strong>  ${professional.phone_number}
            <br>
            <strong>Price from:</strong> ${professional.price_high}$
                `
            );

            new maplibregl.Marker({ color: "#FFC000" })
                .setLngLat([professional.longitude, professional.latitude])
                .setPopup(popup)
                .addTo(map.current);
        });



    }, [type, API_KEY, lng, lat]);


    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
};

export default MapComponent;
