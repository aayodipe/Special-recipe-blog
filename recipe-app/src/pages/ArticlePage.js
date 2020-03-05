import React from 'react';
import articleContent from './article-content.js';
import ArticleList from '../component/ArticleList.js';
import notFoundPage from './NotFoundPage'

const Article = ({match})=> {
    // Get the parameter from the URL
    const name = match.params.name;
    const singleArticle = articleContent.find(article =>article.name === name);
    const OtherArticle = articleContent.filter(article => (article.name !== name));
    if(!singleArticle) return <notFoundPage />
   
    return (
    <React.Fragment>
        <h1>{singleArticle.title}</h1>
     {singleArticle.content.map((paragraph, key) =>
 
     <p key ={key}>{paragraph}</p>
  
    )}
    <h2>Related Articles</h2>
  <ArticleList articles ={OtherArticle} />
    </React.Fragment>
)
}
export default Article