import React from 'react';
import mainLogo from '/workspaces/sp44-final-project-g4/src/front/img/logo-web.png';
import { Link } from 'react-router-dom';


export const SiteTitle = () => {
    return (
        <div className="logo-web">
            <Link to="/">
                <img src={mainLogo} alt="" style={{ width: "100px", height: "80px", marginTop: "15px", marginBottom: "15px", marginLeft: "10px" }} />
            </Link>
        </div>
    );
};