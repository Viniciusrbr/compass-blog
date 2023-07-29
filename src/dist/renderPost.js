import { posts } from "./data.js";
const postsSection = document.querySelector(".posts-section");
let allPosts = posts.reduce((allPosts, post) => {
    return (allPosts +
        `
<div class="post-card">
  <img src="${post.imageUrl}" alt="post image">
  <div class="post-texts">
    <h2 class="post-title">${post.title}</h2>
    <p class="post-content">${post.body}</p>
    <a href="postdetails.html?id=${post.id}" class="post-details">Expand...</a>
  </div>
</div>
        `);
}, "");
postsSection.innerHTML = allPosts;
