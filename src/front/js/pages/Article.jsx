import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from 'react-router-dom';
import { Navbar } from "../component/Navbar.jsx";

export const Article = () => {

    const { store, actions } = useContext(Context);
    const params = useParams();
    const id = parseInt(params.id);
    const [articles, setArticles] = useState(JSON.parse(localStorage.getItem("posts")));
    const theArticle = articles.results.find(article => article.id === id);
    const [article, setArticle] = useState(theArticle);
    console.log(article);


    return (
        <>
            <Navbar />
            <div >
                <div className="d-flex justify-content-center my-4">
                    <div className="project-light my-4" style={{ borderRadius: "6%" }}>
                        <img className="img-fluid p-3" src={article.image} style={{ width: "40rem", borderRadius: "7%" }} />
                    </div>
                </div>
                <div className="mx-5">
                    <hr className="mx-5" style={{ border: "1.5px solid" }} />
                </div>
                <div className="row d-flex justify-content-center mx-5">
                    <div className="col-md-4 col-lg-4 col-xl-4 mt-5">
                        <div>
                            <span className="fst-italic">Category: {article.category}</span>
                        </div>
                        <div>
                            <h3 >{article.title}</h3>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-7 col-xl-7 text-start  mt-5" style={{ borderLeft: "1px solid #000", height: "90%", marginLeft: "20px" }}>
                        <p className="fst-italic text-justify mx-4"><strong>{article.author}</strong> </p>
                        <p className="text-justify mx-4">{article.created.split(" ")[0] + " " + article.created.split(" ")[1] + " " + article.created.split(" ")[2] + " " + article.created.split(" ")[3]}</p>
                        <p className="lh-lg text-justify mx-4">{article.body}</p>
                    </div>
                </div>
            </div>
        </>
    );
};