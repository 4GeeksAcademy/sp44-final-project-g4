import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ChangeOfView = ( { professionalType } ) => {
    return (
        <>
            <div className="position-fixed index-front main-mild-blue-bg rounded mt-1" style={ { maxWidth: "16rem" } }>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">

                        <button onClick={ ( e ) => professionalType( 'vet' ) } className="text-black  nav-link" id="vetTab" data-bs-toggle="tab" data-bs-target="#vetTab-pane" type="button" role="tab" aria-controls="vetTab-pane" aria-selected="false">Vet</button>

                    </li>
                    <li className="nav-item" role="presentation">

                        <button onClick={ ( e ) => professionalType( 'groomer' ) } className="text-black  nav-link" id="groomerTab" data-bs-toggle="tab" data-bs-target="#groomerTab-pane" type="button" role="tab" aria-controls="groomerTab-pane" aria-selected="false">Groomer</button>

                    </li>
                    <li className="nav-item" role="presentation">

                        <button onClick={ ( e ) => professionalType( 'walker' ) } className="text-black  nav-link" id="walkerTab" data-bs-toggle="tab" data-bs-target="#walkerTab-pane" type="button" role="tab" aria-controls="walkerTab-pane" aria-selected="false">Walker</button>

                    </li>
                </ul>
            </div>

        </>
    );
};