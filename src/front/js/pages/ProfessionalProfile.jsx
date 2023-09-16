import React from "react";


export const ProfessionalProfile = () => {
    return (
        <>
            <div className="container text-center mb-3">
                <div className="row row-cols-2">
                    <div className="col  border-end border-3">
                        <img src="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="rounded-circle w-50 p-3 " alt="foto de perfil profesional" />
                    </div>
                    <div className="col">
                        <ul>
                            <li><p>Nombre</p></li>
                            <li><p>Nombre</p></li>
                            <li><p>Nombre</p></li>
                            <li><p>Nombre</p></li>
                            <li><p>Nombre</p></li>
                            <li><p>Nombre</p></li>
                            <li><p>Nombre</p></li>
                            <li><p>Nombre</p></li>
                            <li><p>Nombre</p></li>
                        </ul>
                    </div>
                    <div className="col  border-end border-3">
                        <div className="card">
                            <div className="card-body">
                                Aqui va la descripcion
                            </div>
                        </div>
                        {/* aqui va la calificacion */}
                        <label for="customRange2" className="form-label">Example range</label>
                        <input type="range" className="form-range" min="0" max="5" id="customRange2"></input>
                        {/* aqui va el nuevo comentario */}
                        <div class="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={ {height: "100px"} }></textarea>
                            <label for="floatingTextarea2">Comments</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="list-group">
                            <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">List group item heading</h5>
                                    <small>3 days ago</small>
                                </div>
                                <p className="mb-1">Some placeholder content in a paragraph.</p>
                                <small>And some small print.</small>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">List group item heading</h5>
                                    <small className="text-body-secondary">3 days ago</small>
                                </div>
                                <p className="mb-1">Some placeholder content in a paragraph.</p>
                                <small className="text-body-secondary">And some muted small print.</small>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">List group item heading</h5>
                                    <small className="text-body-secondary">3 days ago</small>
                                </div>
                                <p className="mb-1">Some placeholder content in a paragraph.</p>
                                <small className="text-body-secondary">And some muted small print.</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" className="btn btn-primary">Edit Profile</button>
                <div className="vr"></div>
                <button type="button" className="btn btn-success">Save Change</button>
            </div>
        </>
    )
}