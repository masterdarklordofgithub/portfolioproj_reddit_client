export async function fetchRedditPosts() {
    const response = await fetch('https://www.reddit.com/r/all/hot.json?limit=5');
    const data = await response.json();
    return data.data.children.map(c => c.data);
}

export async function fetchRedditComments(postId) {
    const response = await fetch(`https://www.reddit.com/comments/${postId}.json`);
    const data = await response.json();
    const text = data[1].data.children.map(c => c.data);
    console.log(text);

    return data[1].data.children.map(c => c.data);
}



