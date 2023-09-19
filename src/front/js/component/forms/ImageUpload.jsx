import React, { useState } from 'react';

export const ImageUpload = ( { getImageUrl } ) => {
    const [ image, setImage ] = useState( null );

    const submitImage = () => {
        const data = new FormData();
        data.append( "file", image );
        data.append( "upload_preset", "asshwt6d" );
        data.append( "cloud_name", "dk6bxkc8h" );

        fetch( "https://api.cloudinary.com/v1_1/dk6bxkc8h/image/upload", {
            method: 'POST',
            body: data
        } )
            .then( res => res.json() )
            .then( data => {
                getImageUrl( data[ "secure_url" ] );
            } );
    };

    return (
        <>
            <div className="container" onChange={ ( e ) => setImage( e.target.files[ 0 ] ) }>
                <div className="mb-2">
                    <label htmlFor="formFile" className="form-label">Default file input example</label>
                    <input className="form-control mb-2" type="file" id="formFile" />
                    <button onClick={ submitImage } type="button" className="btn btn-outline-primary">Upload picture</button>
                </div>
            </div>



        </>
    );
};
