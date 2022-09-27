import React from "react";
import ArticleCard from "../components/ArticleCard";
import Data from "../components/data";

function List(){
    return (

        <main className= "PageWrapper">
        <h1>Articles </h1>
            {Data.map((article,i) =>  (
                <ArticleCard
                    key= {i}  // always add a key //
                    blurb= {article.blurb}
                    date= {article.publishedDate}
                    id= {}
                    imageAlt={article.image.alt}
                    imageSrc= {article.image.url}
                    title={article.title}
            />
            ))}
        </main>
    );
}

export default List;