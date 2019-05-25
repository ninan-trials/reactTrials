import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

function Blog(props) {
    const titleList = props.posts
        .map(
            (post) =>
                <li key={post.id}>
                    {post.title}
                </li>
        );

    const contentList = props.posts
        .map(
            (post) =>
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <div>{post.content}</div>
                </div>
        );

    return (
        <div>
            <Sidebar listOfPosts={titleList}/>
            <hr />
            <Content content={contentList}/>
        </div>
    );
}

export default Blog;