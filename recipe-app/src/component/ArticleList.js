import React from "react";
import { Link } from 'react-router-dom'
import ArticleContent from "../pages/article-content";
import Article from "../pages/ArticlePage";

const ArticleList = ({articles})=> (
        <React.Fragment>
         {articles.map((article,key) => (
              <Link  className = 'article-list-item' key={key} to={`/article/${article.name}`}>
              <h3>{article.title}</h3>
              <p>{article.content[0].substring(0,150)}</p>
              </Link>
          )
         

         )}
    
        </React.Fragment>
    )

 

export default ArticleList