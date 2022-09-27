import React from "react";
import {useParams} from "react-router";
import Data from '../components/data';

function Article(){
    const {id}= useParams();
    const articleData = Data.find((article) => (
        article.id= id
    ))

    //console.log(id);
    return (
        <main className="article">
            <header
                className="article--header"
                style= {{
                    backgroundImage: "",
                    backgroundSize: "cover",
                 } }}

                >
                    <div className= "article--header--wrapper">
                        <h1> Article Title</h1>
                        <p> Wednesday, August 22</p>


                        </div>
        <div>

            <h1> Articles </h1>
        </div>
        </main>
    );
}

export default Article;