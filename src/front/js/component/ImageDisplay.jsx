import React from 'react';

export const ImageDisplay = ( { image } ) => {
    return (
        <>
            <div className="bg-success text-end">
                <img style={ { height: "60px", width: "60px", borderRadius: "50%" } } src={ image } id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" alt="" className="p-1" />

            </div>


        </>
    );
};
