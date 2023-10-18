import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { ArticleList } from "../component/blog/ArticleList.jsx";
import { Navbar } from "../component/Navbar.jsx";
//import { ButtonList } from "../component/blog/ButtonList.jsx"

export const TheBlog = () => {

  const backend = localStorage.getItem("url") + "api/"


  const getPosts = async () => {

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`${backend}posts`, requestOptions)
      .then(response => response.json())
      .then(data => localStorage.setItem("posts", JSON.stringify(data)))
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    getPosts();


  }, []);



  return (
    <>
      <Navbar />
      <div className="title d-flex justify-content-center md-4 lg-4 xl-4">

        <div className="project-light mt-3">
          <h1 className="text-center main-title" style={{ fontSize: "70px" }}> Our Blog</h1>
          <div className="container " >

            <img src="https://s1.eestatic.com/2022/05/13/curiosidades/mascotas/672192954_224281687_1706x960.jpg" alt="Our Blog" className="img-fluid rounded " style={{ width: "50rem" }} />

          </div>
        </div>
      </div>
      <div className="mx-5">
        <hr className="mx-5" style={{ border: "1.5px solid" }} />
      </div>
      {/*<div>
        <ButtonList />
      </div>*/}
      <div className="d-flex justify-content-center">
        <ArticleList />
      </div>


    </>
  );
};
