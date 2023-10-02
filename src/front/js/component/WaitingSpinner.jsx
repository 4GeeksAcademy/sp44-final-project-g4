import React from 'react';

export const WaitingSpinner = () => {
    return (
        <>
            <div className="project-light text center p-3">
                <h1 className="display-4">We are getting your data...</h1>
                <p className="lead main-title">Please wait a moment while we search for the perfect pet for you. We have thousands of adoptable animals in our adoption page, we're sure you will find the perfect match for your lifestyle and needs.</p>


                <div className="text-center">

                    <div className="spinner-grow text-primary m-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-secondary m-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-success m-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-danger m-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-warning m-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-info m-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-light m-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-dark m-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </>
    );
};
