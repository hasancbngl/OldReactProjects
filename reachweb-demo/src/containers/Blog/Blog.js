import React, { Component } from 'react';
import FullPost from '../../components/FullPost/FullPost';
import Post from '../../components/Post/Post';

import './Blog.css';

class Blog extends Component {
    render() {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    
                </section>
            </div>
        );
    }
}

export default Blog;