import React, { useState } from 'react';
import { Modal } from './jumbotronComponents/Modal.jsx';


export const Jumbotron = () => {
    const [ showModal, setShowModal ] = useState( false );

    const handleClose = () => {
        setShowModal( false );
    };

    return (

        <div className="jumbotron jumbotron-fluid px-2 py-5 mt-5" id='jumbotron-home'>
            <div className="container container-jumbotron-home py-3 px-4">
                <div className="p-3 rounded main-light-blue-bg-jumbotron-title">

                    <h1 className="card-title-jumbotron"><strong >All</strong> the services <strong>for your pet</strong> in one place</h1>
                </div>
                <div className="spacer"></div>
                <hr className="my-4"></hr>

                <div className="cards-list-jumbotron-home px-2 py-4">

                    {/* <div className="card 2" id='card-jumbotron-home'>
                        <div className="card_image">
                            <img src="https://images.unsplash.com/photo-1580893211123-627e0262be3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" />
                        </div>
                        <div className="card_title">
                            <p className="jumbotron-card-p">Certified professionals</p>
                        </div>
                    </div> */}

                    {/* <div className="card 1" id='card-jumbotron-home'>
                        <div className="card_image"> <img src="https://www.lifewire.com/thmb/YBQuRMKxxhx3Zb3uJ1x-QOT6VsM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Maplocation_-5a492a4e482c52003601ea25.jpg" /> </div>
                        <div className="card_title">
                            <p className="jumbotron-card-p">Choose your location</p>
                        </div>
                    </div> */}

                    {/* <div className="card 3" id='card-jumbotron-home'>
                        <div className="card_image">
                            <img src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80" />
                        </div>
                        <div className="card_title">
                            <p className="jumbotron-card-p">Adopt a pet</p>
                        </div>
                    </div> */}
                    <h6 className="lh-base"> <span className="main-title">FurryFriends</span> is an online platform designed to unite passionate animal workes and committed pet owners in a virtual space dedicated to animal care and welfare. <br />Mission: Our mission is to create an online community where vets, walkers and groomers professionals can offer their expertise and exceptional services, while pet lovers can find high quality care for their furry companions and even adopt a new furry friend.
                    </h6>
                </div>

                <a className="btn custom-btn-jumbotron-home glow-on-hover btn-4 btn-lg my-5" id='btn-jumbotron-home'
                    href="#"
                    role="button"
                    onClick={ () => setShowModal( true ) }>
                    <h5>Find a professional</h5></a>

                <Modal showModal={ showModal } handleClose={ handleClose } />
            </div>
        </div>

    );
};