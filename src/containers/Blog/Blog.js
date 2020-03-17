import React, { Component } from 'react';
import Posts from '../Blog/Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';
import FullPost from '../Blog/FullPost/FullPost';
import {Router,Route,Link, withRouter, NavLink, Switch} from 'react-router-dom';
import './Blog.css';

class Blog extends Component {

    render () {
        
        return (
            <div>
                <header>
                    <nav className= "Blog">
                        <ul>
                            <li><NavLink to = "/" exact>Home</NavLink></li>
                            <li><NavLink to = {{
                                pathname : "/new-post",
                                hash : "#submit",
                                search : "?quick-submit=true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path = "/" exact render = {() => <h1>This is an exact match for the current route</h1>}/>
                <Route path = "/" render = {() => <h1>This is a default match for all the routes</h1>}/> */}
                <Route path = "/" exact component = {Posts}/>
                <Switch>
                <Route path = "/new-post" component = {NewPost}/>
                <Route path = "/:id" exact component = {FullPost}/>
                </Switch>
            </div>
        );
    }

}

export default Blog;