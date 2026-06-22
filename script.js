let posts = JSON.parse(localStorage.getItem("posts")) || [];

displayPosts();

function addPost() {
    let postText = document.getElementById("postInput").value;

    if (postText.trim() === "") {
        alert("Write something first!");
        return;
    }

   let post = {
    username: "Gayatri",
    text: postText,
    likes: 0,
    comments: [],
    time: new Date().toLocaleString()
};
    posts.push(post);

    localStorage.setItem("posts", JSON.stringify(posts));

    document.getElementById("postInput").value = "";

    displayPosts();
}

function likePost(index) {
    posts[index].likes++;

    localStorage.setItem("posts", JSON.stringify(posts));

    displayPosts();
}

function addComment(index) {
    let comment = prompt("Enter your comment:");

    if (comment) {
        posts[index].comments.push(comment);

        localStorage.setItem("posts", JSON.stringify(posts));

        displayPosts();
    }
}

function deletePost(index) {
    if (confirm("Delete this post?")) {
        posts.splice(index, 1);

        localStorage.setItem("posts", JSON.stringify(posts));

        displayPosts();
    }
}

function displayPosts() {
    let postContainer = document.getElementById("posts");

    postContainer.innerHTML = "";

    posts.forEach((post, index) => {

        let div = document.createElement("div");
        div.className = "post";

        let commentsHTML = "";

        post.comments.forEach(comment => {
            commentsHTML += `<p>💬 ${comment}</p>`;
        });

        div.innerHTML = `
            <p><strong>${post.text}</strong></p>

            <small>${post.time}</small>

            <br><br>

            <button onclick="likePost(${index})">
                ❤️ Like (${post.likes})
            </button>

            <button onclick="addComment(${index})">
                💬 Comment
            </button>

            <button onclick="deletePost(${index})">
                🗑️ Delete
            </button>

            <div style="margin-top:10px;">
                ${commentsHTML}
            </div>
        `;

        postContainer.appendChild(div);
    });
}
