import React from "react";
import { Link } from "react-router-dom";



export const CardVet = () => {

    return (
        <>
            <div className="card mb-3" style={ { maxWidth: "18rem" } }>
                <div className="card-header">Veterinarians</div>
                <Link to={ `/views/` } state="vet">
                    <img src="https://media.istockphoto.com/id/879799122/es/foto/m%C3%A9dico-veterinario-en-la-cl%C3%ADnica.jpg?s=612x612&w=0&k=20&c=uGr78sxDxPETpNyEiObttRXiDVim0fbA49MiQm3Wv_I="
                        style={ { maxWidth: "15rem" } } alt="veterinarians" />
                </Link>
            </div>
        </>
    );
};