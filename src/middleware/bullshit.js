import React, { useEffect, useState } from 'react';

export function RedditCallMostPopular() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://www.reddit.com/r/all/hot.json?limit=5')
            .then(response => response.json())
            .then(data => setPosts(data.data.children.map(c => c.data)))
            .catch(error => console.error('Error:', error));
    }, []);

    console.log(`hello from RedditCallMostPopular.js posts: ${posts}`);

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.selftext}</p>
                </div>
            ))}
        </div>
    );
}
export async function fetchRedditPosts() {
    const response = await fetch('https://www.reddit.com/r/all/hot.json?limit=5');
    const data = await response.json();
    return data.data.children.map(c => c.data);
}