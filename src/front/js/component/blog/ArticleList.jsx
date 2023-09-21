import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";



export const ArticleList = () => {

    const { store, actions } = useContext( Context );
    const [ articles, setArticles ] = useState( JSON.parse( localStorage.getItem( "posts" ) ) );


    return (
        <div className="d-flex justify-content-center m-5">
            <div className="row">
                { articles && articles.results.map( ( article ) => (
                    <div className='col-md-4 col-lg-4 col-xl-4 mt-4 mb-4' key={ article.id }>
                        <div className='card'>
                            <img className='card-img-bottom' src={ article.image } />
                            <div className="card-body">
                                <h3 className='card-title'>{ article.title }</h3>
                                <p className="fst-italic">by: { article.author }</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center m-2">
                                <span className="card-text text-start m-2">{ article.category }</span>
                                <Link to={ `/blog/${ article.id }` } className="btn shadow-sm m-2">Read...</Link>
                            </div>

                        </div>

                    </div>
                ) )
                }
            </div>
        </div>

    );
};
