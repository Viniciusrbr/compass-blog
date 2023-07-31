import { posts } from "./data.js";

const postsSection = document.querySelector(".posts-section")!;

let allPosts = posts.reduce((allPosts, post) => {
  return (
    allPosts +
    `
<div class="post-card">
  <img src="${post.imageUrl}" alt="post image">
  <div class="post-texts">
    <a href="postdetails.html?id=${post.id}"
    <h2 class="post-title">${post.title}</h2>
    <p class="post-content">${post.body}</p>
    <p class="post-details">Expand...</p>
    </a>
  </div>
</div>
        `
  )
}, "");

postsSection.innerHTML = allPosts;