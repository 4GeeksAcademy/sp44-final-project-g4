import React from "react";



export const Card = () => {
    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://media.istockphoto.com/id/879799122/es/foto/m%C3%A9dico-veterinario-en-la-cl%C3%ADnica.jpg?s=612x612&w=0&k=20&c=uGr78sxDxPETpNyEiObttRXiDVim0fbA49MiQm3Wv_I=" className="d-block w-100" alt="gato"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://cdn.pixabay.com/photo/2022/08/10/17/10/woman-7377662_1280.jpg" className="d-block w-100" alt="paseador"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.istockphoto.com/id/1407301621/es/foto/peluquero-masculino-profesional-haciendo-corte-de-pelo-de-perro-yorkshire-terrier-en-sal%C3%B3n-de.jpg?s=612x612&w=0&k=20&c=1z-GWMbMdF1czKW4sCRd-FvRoSdQl6XOu8if54klMnc=" className="d-block w-100" alt="peluquero"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2021/11/22/15/48/dog-6816752_1280.jpg" className="d-block w-100" alt="adopcion"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}