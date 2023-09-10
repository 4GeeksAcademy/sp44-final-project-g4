import React from 'react'


export const Jumbotron = () => {
    return (
        <div class="jumbotron jumbotron-fluid px-2 py-5">
            <div class="container container-jumbotron py-3 px-4">
                <h1 class="card-title-jumbotron"><b>All</b> the services <b>for your pet</b> in one place</h1>
                <div class="spacer"></div>
                <hr class="my-4"></hr>

                <div class="cards-list px-2 py-4">

                    <div class="card 2">
                        <div class="card_image">
                            <img src="https://images.unsplash.com/photo-1580893211123-627e0262be3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" />
                        </div>
                        <div class="card_title">
                            <p class="jumbotron-card-p">Certified professionals</p>
                        </div>
                    </div>

                    <div class="card 1">
                        <div class="card_image"> <img src="https://www.lifewire.com/thmb/YBQuRMKxxhx3Zb3uJ1x-QOT6VsM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Maplocation_-5a492a4e482c52003601ea25.jpg" /> </div>
                        <div class="card_title">
                            <p class="jumbotron-card-p">Choose your location</p>
                        </div>
                    </div>

                    <div class="card 3">
                        <div class="card_image">
                            <img src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80" />
                        </div>
                        <div class="card_title">
                            <p class="jumbotron-card-p">Adopt a pet</p>
                        </div>
                    </div>
                </div>
                <a class="btn custom-btn glow-on-hover btn-4 btn-lg my-5" href="https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" role="button"><h5>Find a professional</h5></a>
            </div>
        </div>
    )
}
