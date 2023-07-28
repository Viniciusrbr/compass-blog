import { posts } from "./data.js";
console.log("Informações dos posts:");
/*

let allPosts = posts.reduce((allPosts, post) => {
    console.log(`Post ${post.id}: ${post.title}`);
    return allPosts;
}, 0);

*/
const postsSection = document.querySelector(".posts-section");
let allPosts = posts.reduce((allPosts, post) => {
    return (allPosts +
        `
<div class="post-card">
  <img src="${post.imageUrl}" alt="post image">
  <div class="post-texts">
    <h2 class="post-title">${post.title}</h2>
    <p class="post-content">${post.body}</p>
    <a href="postdetails.html" class="post-details">Expand...</a>
  </div>
</div>
        `);
}, "");
postsSection.innerHTML = allPosts;
