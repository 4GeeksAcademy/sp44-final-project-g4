import React from "react";


export const Reviews = ()=> {
    return(
        <>
            <div className="list-group">
                <div className="review border border-2">
                    <div className="d-flex w-100 justify-content-between ">
                        <h5 className="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small>And some small print.</small>
                </div>
                <div className="review border border-2">
                    <div className="d-flex w-100 justify-content-between ">
                        <h5 className="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small>And some small print.</small>
                </div>
                <div className="review border border-2">
                    <div className="d-flex w-100 justify-content-between ">
                        <h5 className="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small>And some small print.</small>
                </div>
            </div>
        </>
    )
}