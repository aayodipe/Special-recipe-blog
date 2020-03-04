import React from 'react';
import articleContent from './article-content.js';
import ArticleList from '../component/ArticleList.js';



const currentArticle  = () => {
    return (
        <ArticleList articles = { articleContent } />
    )
}
 

 

export default currentArticle