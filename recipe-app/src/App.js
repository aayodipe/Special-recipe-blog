import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './pages/HomePage.js';
import About from './pages/About-Us.js';
import Article from './pages/ArticlePage.js';
import Blog from './pages/Blog.js';
import ArticleListPage from './pages/ArticleListPage';
import NavBar from './pages/NavBar.js';



function App() {
  return (
  
      <Router>
         <NavBar />
         <div id = "page-body">
        <Route path ="/" component = {HomePage} exact />
        <Route path ="/about" component = {About} />
        <Route path ="/article/:name" component = {Article} />
        <Route path ="/article-list" component = {ArticleListPage} />
        <Route path ="/blog" component = {Blog} />
        
        
        </div>
      </Router>

  );
}

export default App;
