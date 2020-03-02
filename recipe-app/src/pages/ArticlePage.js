import React from 'react';
import articleContent from './article-content.js';


const Article = ({match})=> {
const name = match.params.name;
const singleArticle = articleContent.find(article => article.name === name)
if (!singleArticle) return <h2> Article do not exist </h2>
return (
<React.Fragment>
<h1>{singleArticle.title} </h1>
{singleArticle.content.map((paragraph, key) => 
 <p key ={key}> {paragraph}</p> )}

 
</React.Fragment>
)
}

export default Article