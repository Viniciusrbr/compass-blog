import { posts, comments } from "./data.js";
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');
const postCard = document.querySelector('.card-post');
const commentsSection = document.querySelector('.card-comments');
if (postId) {
    const post = posts.find(post => post.id === parseInt(postId)); // vira um objeto com as informações do post
    const postComments = comments.filter(comment => comment.postId === (post === null || post === void 0 ? void 0 : post.id)); // vira um array com os comentarios do post
    if (post) {
        postCard.innerHTML = `
            <img src="${post.imageUrl}" alt="post image">
            <div class="card-post-texts">
                <h2 class="card-post-title">${post.title}</h2>
                <p class="card-post-content">${post.body}</p>
            </div>
        `;
        if (postComments.length > 0) {
            const commentsHTML = postComments.reduce((allComments, comment) => {
                return `${allComments}
                <div class="comment">
                    <p class="user-info">${comment.userName}: ${comment.email}:</p>
                    <p class="user-comment">${comment.body}</p>
                </div>`;
            }, "");
            commentsSection.innerHTML = commentsHTML;
        }
        else {
            commentsSection.innerHTML = "<p>Ainda não existem comentarios nesse post</p>";
        }
    }
}
