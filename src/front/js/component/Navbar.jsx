import React from 'react';
import { ImageDisplay } from "./ImageDisplay.jsx";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
            <div className="dropdown bg-success  d-flex justify-content-end">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <Link className="btn btn-primary text-center" to="/login">Login</Link>
                </div>

                <ImageDisplay image="https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-04/fresas%C2%A9iStock.jpg?itok=iBcd_HLd" />
            </div>


        </>
    );
}


