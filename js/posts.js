function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => displayPosts(data))
}
loadPosts()

function displayPosts(posts) {
    const postContainer = document.getElementById("post-container");
    for (const post of posts) {
        const div = document.createElement("div");
        div.classList.add("post")
        div.innerHTML = `
        <h1>Id : ${post.id}</h1>
        <h1>New Title: ${post.title}</h1>
        <p>New descriptipn: ${post.body}</p> `
        postContainer.appendChild(div)
    }
}

