import React from 'react';
import mainLogo from '/workspaces/sp44-final-project-g4/src/front/img/logo-web.png';


export const SiteTitle = () => {
    return (
        <div className="logo-web">
            <img src={mainLogo} alt="" style={{ width: "100px", height: "80px", padding: "10px", marginLeft: "10px" }} />
        </div>
    );
};
