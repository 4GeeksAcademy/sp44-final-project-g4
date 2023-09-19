import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';
import { vets } from './jsonCalls/vetCall-1.js';
import { groomers } from './jsonCalls/groomerCall-1';
import { walkers } from './jsonCalls/walkerCall-1';



const MapComponent = ( { type } ) => {
    const mapContainer = useRef( null );
    const map = useRef( null );
    const [ lng ] = useState( -74.00597 );
    const [ lat ] = useState( 40.71427 );
    const [ zoom ] = useState( 12 );
    const [ API_KEY ] = useState( '6EQmKaS0rvlVuV87v1aZ ' );

    let professionalList;
    let registeredProfessional;

    useEffect( () => {
        if ( map.current ) return; // stops map from intializing more than once
        if ( type === "vets" ) professionalList = vets;
        if ( type === "walkers" ) professionalList = walkers;
        if ( type === "groomers" ) professionalList = groomers;

        if ( type === "vets" ) registeredProfessional = JSON.parse( localStorage.getItem( "vets" ) );
        if ( type === "walkers" ) registeredProfessional = JSON.parse( localStorage.getItem( "walkers" ) );
        if ( type === "groomers" ) registeredProfessional = JSON.parse( localStorage.getItem( "groomers" ) );

        // if(type === 'vet') {

        // }
        map.current = new maplibregl.Map( {
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${ API_KEY }`,
            center: [ lng, lat ],
            zoom: zoom
        } );
        map.current.addControl( new maplibregl.NavigationControl(), 'top-right' );



        professionalList.forEach( professional => {
            const popup = new maplibregl.Popup( { offset: 25 } ).setText(
                `- ${ professional.title }
                -${ professional.address }`
            );
            new maplibregl.Marker( { color: "#FF037637600" } )
                .setLngLat( [ professional.longitude, professional.latitude ] )
                .setPopup( popup )
                .addTo( map.current );

        } );

        registeredProfessional.forEach( professional => {
            const popup = new maplibregl.Popup( { offset: 25 } ).setText(
                `- ${ professional.name }
                -${ professional.address }`
            );

            new maplibregl.Marker( { color: "#FFC000" } )
                .setLngLat( [ professional.longitude, professional.latitude ] )
                .setPopup( popup )
                .addTo( map.current );
        } );



    }, [ API_KEY, lng, lat ] );


    return (
        <div className="map-wrap">
            <div ref={ mapContainer } className="map" />
        </div>
    );
};

export default MapComponent;
