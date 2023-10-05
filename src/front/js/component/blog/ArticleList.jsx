import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";



export const ArticleList = () => {

    const { store, actions } = useContext(Context);
    const [articles, setArticles] = useState(JSON.parse(localStorage.getItem("posts")));


    return (

        <div className="row d-flex justify-content-center">
            {articles && articles.results.map((article) => (
                <div className='card col-md-3 col-lg-3 col-xl-3 m-2 px-0' key={article.id} style={{ maxWidth: "20rem", maxHeight: "30rem" }}>
                    <div className='card-img-bottom'>
                        <img src={article.image} style={{ width: "100%", height: "12rem" }} />
                    </div>
                    <div className="card-body">
                        <h5 className='title'>{article.title}</h5>
                        <p className="fst-italic">by: {article.author}</p>
                        <span className="fst-italic">Category: {article.category}</span>
                    </div>
                    <div className="d-flex justify-content-end m-2">
                        <Link to={`/blog/${article.id}`} className="btn shadow-sm m-2">Read...</Link>
                    </div>
                </div>
            ))
            }
        </div >


    );
};
