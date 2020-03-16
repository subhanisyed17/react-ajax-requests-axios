import React, { Component } from 'react';
import Posts from '../Blog/Posts/Posts';
import {Router,Route} from 'react-router-dom';
import './Blog.css';

class Blog extends Component {

    render () {
        
        return (
            <div>
                <header>
                    <nav className= "Blog">
                        <ul>
                            <li><a href = "/">Home</a></li>
                            <li><a href = "/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path = "/" exact render = {() => <h1>This is an exact match for the current route</h1>}/>
                <Route path = "/" render = {() => <h1>This is a default match for all the routes</h1>}/>
            </div>
        );
    }

}

export default Blog;