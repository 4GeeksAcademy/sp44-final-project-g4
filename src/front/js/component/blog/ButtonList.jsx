import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";


export const ButtonList = () => {

    const { store, actions } = useContext(Context);
    const [articles, setArticles] = useState(JSON.parse(localStorage.getItem("postsLocal")))
    console.log(articles)
    const todo = ["All", ...new Set(articles && articles.results.map((article) => article.category))]
    console.log(todo)
    const [categories, setCategories] = useState(todo)


    const filterCategory = (category) => {
        if (category === "All") {
            setArticles(useState(JSON.parse(localStorage.getItem("postsLocal"))))
            return
        }
        const filtereData = articles && articles.results.filter((article) => article.category === category);
        console.log(filtereData)
        setArticles(filtereData)
    }
    return (
        <div className="d-flex justify-content-center">
            {categories.map((category, index) => (
                <div key={index}>
                    <button type="button" className='btn-category me-4 ' onClick={() => filterCategory(category)} >
                        {category}
                    </button>

                </div>

            ))}

        </div>
    )
}
