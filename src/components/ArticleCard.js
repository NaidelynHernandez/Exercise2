
import React, {useMemo}, 

import React from "react";


function ArticleCard ({blurb, date,id,imageAlt,imageSrc, title}){
    const articleDate= useMemo (() => {
        if(!date)return '';
        return parsedDate.toDateString();
    }, [articleData]);

    

    <p className="articleCard--text">
        <h2>{title}</h2>

        <p className= "link">
            <a href= {`/article/${id}`}> Read more</a></p>
            </div> 
            </div> 

        );
    
}

export default ArticleCard; 


