import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from 'react-router-dom'

export const Article = () => {

    const { store, actions } = useContext(Context);
    const params = useParams();
    const id = parseInt(params.id)
    const articles = JSON.parse(localStorage.getItem("postsLocal"))
    const theArticle = articles.results.find(article => article.id === id)
    const [article, setArticle] = useState(theArticle);
    console.log(article)


    return (
        <div>
            <div className="d-flex justify-content-center mt-5">
                <img className="" src="https://imagenes.elpais.com/resizer/IwVVzO5nJemtmu011yOs04S42eQ=/980x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/XAL7IFFG4EYMAJ5Z4VR7VXP2OQ.jpg" alt="" />
            </div>
            <div className="text-start mx-5 mt-5">
                <h2 className='card-title'>{article.title}</h2>
                <p className="text-end">{article.created}</p>
                <p className="lh-lg text-justify mx-5">{article.body}</p>
                <hr />
                <div className="d-flex justify-content-center">
                    <p className="fst-italic"><strong>Written by: </strong> {article.author}</p>
                </div>
            </div>

        </div>
    )
}
