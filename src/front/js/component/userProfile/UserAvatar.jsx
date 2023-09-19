import React from "react";

const handleOnErrorImg = ( e ) => {
    e.target.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
};

export const UserAvatar = () => {
    return(
        <>
            <div className="rounded float-start">
                <img src={user.avatar}
                    alt="profile picture"
                    onError={handleOnErrorImg}
                    className="w-75 p-3" />
            </div>
        </>
    )
}