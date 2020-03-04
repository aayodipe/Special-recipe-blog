import React from 'react';
import articleContent from './article-content.js';

const Article = ({match})=> {
    // Get the parameter from the URL
    const name = match.params.name;
    const singleArticle = articleContent.find(article =>article.name === name)
    if(!singleArticle) return <h1>Oh Sorry. No Article is found.</h1>   
    return (
    <React.Fragment>
        <h1>{singleArticle.title}</h1>
     {singleArticle.content.map((paragraph, key) =>
 
     <p key ={key}>{paragraph}</p>
    
    )}
    </React.Fragment>
)
}
export default Article