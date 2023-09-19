import React from "react";


export const UserReviews = () => {
    return (
        <>
            <ul>
                <li>
                    <div className="border border-2 mb-2">
                        <div className="d-flex w-100 justify-content-between ">
                            <h5 className="mb-1">Name of user</h5>
                            <small>3 days ago</small>
                        </div>
                        <p className="mb-1">Aqui va el comentario del user.</p>
                        <small>And some small print.</small>
                    </div>
                </li>
            </ul>
        </>
    );
};