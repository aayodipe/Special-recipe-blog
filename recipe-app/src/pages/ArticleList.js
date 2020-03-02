import React from 'react'
import { Link } from 'react-router-dom'
import articleContent from './article-content.js';

const ArticleList = () => 
 (
     <> 
    <h1>All Articles</h1>
    {articleContent.map((article, key) => (
        <>
        <Link className ='article-list-item' key= {key}  to={`/article/${article.name}`}>
        <h3>{article.title}</h3></Link>
        <p>{article.content[0].substring(0,150)}...</p>
   
        </>

    ))}
    </>

  
)



 

export default ArticleList