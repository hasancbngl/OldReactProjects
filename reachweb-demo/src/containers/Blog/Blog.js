import React, { Component } from 'react';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import Post from '../../components/Post/Post';
import axios from 'axios';

import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId:null
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                //store only elements 0-5 
                const posts = response.data.slice(0,5);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'hasan',
                    }                
                });
                this.setState({posts: updatedPosts});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId:id});
    };

    render() {
        const posts = this.state.posts.map(post => {
           return <Post 
           clicked={() => this.postSelectedHandler(post.id)}
           key={post.id} 
           title={post.title} 
           author={post.author}/>
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;