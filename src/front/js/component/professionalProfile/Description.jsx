import React from "react";


export const Description =() => {
    return(
        <>
            <div className="card-body">
                Aqui va la descripcion
            </div>
            {/* aqui va la calificacion */}
            <label htmlFor="customRange2" className="form-label">Example range</label>
            <input type="range" className="form-range" min="0" max="5" id="customRange2"></input>
            {/* aqui va el nuevo comentario */}
            <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                <label htmlFor="floatingTextarea2">Comments</label>
            </div>
        </>
    )
}