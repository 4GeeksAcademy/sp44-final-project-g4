import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { ArticleList } from "../component/blog/ArticleList.jsx"
//import { ButtonList } from "../component/blog/ButtonList.jsx"

export const TheBlog = () => {


  return (
    <>
      <div className="title d-flex justify-content-center md-4 lg-4 xl-4">
        <div>
          <h1 className="text-center"> Our Blog</h1>
          <img src="https://s1.eestatic.com/2022/05/13/curiosidades/mascotas/672192954_224281687_1706x960.jpg" alt="Our Blog" className="img-fluid" />
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
  )
}
