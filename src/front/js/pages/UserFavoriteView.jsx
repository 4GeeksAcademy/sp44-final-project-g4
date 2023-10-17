import React, { useEffect, useState } from 'react';
import { RegisteredCard } from '../component/favorite/RegisteredCard.jsx';
import { UnregisterCard } from '../component/favorite/UnregisterCard.jsx';
import { WaitingSpinner } from '../component/WaitingSpinner.jsx';
import { Navbar } from "../component/Navbar.jsx";

export const UserFavoriteView = () => {
    const backend = "https://sample-service-name-9dn1.onrender.com/api/";
    const [ userId, setuserId ] = useState( localStorage.getItem( "id" ) );
    const [ favoriteWalker, setFavoriteWalker ] = useState( null );
    const [ favoriteGroomer, setFavoriteGroomer ] = useState( null );
    const [ favoriteVet, setFavoriteVet ] = useState( null );
    const [ showCards, setShowCards ] = useState( false );

    const [ proffessionalType, setProffessional ] = useState( "vet" );

    const onOptionChange = e => {
        setProffessional( e.target.value );
    };

    const deleteUser = () => {

        var requestOptions = {
            method: 'DELETE',
        };

        fetch( `${ backend }professional/3066371118/vet`, requestOptions )
            .then( response => response.json() )
            .then( result => console.log( "Killlooooooo!!!!", result ) )
            .catch( error => console.log( 'error', error ) );
    };

    const handleLog = () => {
        console.log( "favorite walker", favoriteWalker );
        console.log( favoriteGroomer );
        console.log( favoriteVet );
        console.log( showCards );
        localStorage.setItem( "favoriteGroomer", JSON.stringify( favoriteGroomer ) );
        localStorage.setItem( "favoriteVet", JSON.stringify( favoriteVet ) );
        localStorage.setItem( "favoriteWalker", JSON.stringify( favoriteWalker ) );
        setShowCards( true );
    };
    useEffect( () => {
        deleteUser();

        getFavorites();

        return () => {
        };
    }, [] );

    const getFavorites = () => {

        const myHeaders = new Headers();
        myHeaders.append( "Content-Type", "application/json" );
        myHeaders.append( "Access-Control-Allow-Origin", "*" );

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'

        };

        Promise.all( [
            fetch( `${ backend }favorite/${ userId }/walker`, requestOptions ),
            fetch( `${ backend }favorite/1694574930/groomer`, requestOptions ),
            fetch( `${ backend }favorite/${ userId }/vet`, requestOptions )
        ] ).then( responses => {
            return Promise.all( responses.map( res => res.json() ) );
        } ).then( data => {
            // console.log( data[ 0 ].response.map( favorite => favorite.WalkerId ) );
            // console.log( data[ 1 ].response.map( favorite => favorite.GroomerId ) );
            // console.log( data[ 2 ].response.map( favorite => favorite.VetId ) );
            const favWalker = data[ 0 ].response.map( favorite => favorite.WalkerId );
            const favGroomer = data[ 1 ].response.map( favorite => favorite.GroomerId );
            const favVet = data[ 2 ].response.map( favorite => favorite.VetId );
            return {
                favWalker,
                favGroomer,
                favVet
            };
        } )
            .then( data => {
                console.log( data );
                let walkers = [];
                let groomers = [];
                let vets = [];

                data.favWalker.forEach( fav => {
                    const myHeaders = new Headers();
                    myHeaders.append( "Content-Type", "application/json" );
                    myHeaders.append( "Access-Control-Allow-Origin", "*" );


                    const requestOptions = {
                        method: 'GET',
                        headers: myHeaders,
                        redirect: 'follow'
                    };

                    fetch( `${ backend }professional/${ fav }/walker`, requestOptions )
                        .then( response => response.json() )
                        .then( result => {
                            const email = result.user.email;
                            // console.log( result.user );
                            walkers.push( result.user );

                        } )
                        .catch( error => console.log( 'error', error ) );
                } );
                setFavoriteWalker( walkers );
                data.favGroomer.forEach( fav => {
                    const myHeaders = new Headers();
                    myHeaders.append( "Content-Type", "application/json" );
                    myHeaders.append( "Access-Control-Allow-Origin", "*" );


                    const requestOptions = {
                        method: 'GET',
                        headers: myHeaders,
                        redirect: 'follow'
                    };
                    console.log( fav );
                    fetch( `${ backend }professional/${ fav }/groomer`, requestOptions )
                        .then( response => response.json() )
                        .then( result => {
                            const email = result.groomer.email;
                            // console.log( "Here!!!!!", result.groomer );
                            groomers.push( result.groomer );

                        } )
                        .catch( error => console.log( 'error', error ) );
                } );

                setFavoriteGroomer( groomers );

                data.favVet.forEach( fav => {
                    const myHeaders = new Headers();
                    myHeaders.append( "Content-Type", "application/json" );
                    myHeaders.append( "Access-Control-Allow-Origin", "*" );


                    const requestOptions = {
                        method: 'GET',
                        headers: myHeaders,
                        redirect: 'follow'
                    };
                    console.log( fav );
                    fetch( `${ backend }professional/${ fav }/vet`, requestOptions )
                        .then( response => response.json() )
                        .then( result => {
                            // const email = result.groomer.email;
                            // console.log( "Vet!!!!!", result.vet );
                            vets.push( result.vet );

                        } )
                        .catch( error => console.log( 'error', error ) );
                } );

                setFavoriteVet( vets );
                setTimeout( () => {
                    handleLog();
                }, 4000 );

            } );




    };


    return (
        <>
            <Navbar />

            {/* subNavbar */ }
            {/* <div className="App">
                <h3>Select Proffessional Type</h3>

                <input type="radio" name="vet" value="vet" id="vet"
                    checked={ proffessionalType === "vet" }
                    onChange={ onOptionChange }
                />
                <label htmlFor="regular">Vet</label>

                <input type="radio" name="groomer" value="groomer" id="groomer"
                    onChange={ onOptionChange }
                    checked={ proffessionalType === "groomer" } />
                <label htmlFor="medium">Groomer</label>

                <input type="radio" name="walker" value="ewalker" id="walker"
                    onChange={ onOptionChange }
                    checked={ proffessionalType === "walker" } />
                <label htmlFor="large">Walker</label>
            </div> */}
            {/* subNavbar */ }
            <div className='container pt-3'>
                <h1>Favorite Proffessionals</h1>
            </div>
            { showCards !== true &&
                <div className="container d-flex justify-content-center mt-5">

                    <WaitingSpinner />
                </div>
            }


            <ul className="d-flex flex-wrap justify-content-center" >

                { showCards === true && favoriteVet.map( ( sigleVet, index ) => {
                    return ( <li key={ index }>
                        <div className="container text-center mt-3">
                            { sigleVet.latitude && <RegisteredCard professional={ sigleVet } /> }
                        </div>
                    </li> );
                } ) }
                { showCards === true && favoriteWalker.map( ( sigleWalker, index ) => {
                    return (
                        <li key={ index }>
                            <div className="container text-center mt-3">
                                { sigleWalker.latitude && <RegisteredCard professional={ sigleWalker } /> }
                                { !sigleWalker.latitude && <UnregisterCard professional={ sigleWalker } /> }
                            </div>
                        </li> );
                } ) }
                { showCards === true && proffessionalType === "groomer" && favoriteGroomer.map( ( sigleGroomer, index ) => {
                    return (
                        <li key={ index }>
                            <div className="container text-center mt-3">
                                { sigleGroomer.latitude && <RegisteredCard professional={ sigleGroomer } /> }
                                { !sigleGroomer.latitude && <UnregisterCard professional={ sigleGroomer } /> }
                            </div>
                        </li> );
                } ) }
            </ul>
        </>
    );
};
