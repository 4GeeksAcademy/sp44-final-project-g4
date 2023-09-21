import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { ArticleList } from "../component/blog/ArticleList.jsx";
import { Navbar } from "../component/Navbar.jsx";
//import { ButtonList } from "../component/blog/ButtonList.jsx"

export const TheBlog = () => {

  const getPosts = async () => {

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch( "https://miniature-trout-9rqg9vgq9jv2p959-3001.preview.app.github.dev/api/posts", requestOptions )
      .then( response => response.json() )
      .then( data => localStorage.setItem( "posts", JSON.stringify( data ) ) )
      .catch( error => console.log( 'error', error ) );
  };

  useEffect( () => {
    getPosts();


  }, [] );



  return (
    <>
      <Navbar />
      <div className="title d-flex justify-content-center md-4 lg-4 xl-4">
        <div className="project-light mt-3">
          <h1 className="text-center main-title" style={ { fontSize: "70px" } }> Our Blog</h1>
          <div className="container " >

            <img src="https://s1.eestatic.com/2022/05/13/curiosidades/mascotas/672192954_224281687_1706x960.jpg" alt="Our Blog" className="img-fluid rounded " style={ { width: "50rem" } } />
          </div>
        </div>
      </div>
      <h1 className="mt-2 text-center fs-2 fst-italic"><strong>Learn some tips and tricks about pet care</strong></h1>
      <hr />
      {/*<div>
        <ButtonList />
      </div>*/}
      <div className="d-flex justify-content-center mx-5">
        <ArticleList />
      </div>


    </>
  );
};
