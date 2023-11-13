let nameField = document.getElementById("name");
let commentField = document.getElementById("user_comment");

function newComment() {
  if (nameField.value.length > 0 && commentField.value.length > 0) {
    document.getElementById("comment_btn").disabled = false;
  } else {
    document.getElementById("comment_btn").disabled = true;
  }
}

function addComment() {
  const fullName = nameField.value;
  const userComment = commentField.value;
  const commentContainer = document.querySelector("#new_comment_container");
  let commentDetails = document.createElement("div");
  commentDetails.classList.add("comment-details");

  let userImg = document.createElement("img");
  userImg.src = "images/avatar.png";
  userImg.alt = "User image";

  let author = document.createElement("span");
  let commentContent = document.createElement("p");
  author.classList.add("comment-author");
  commentContent.classList.add("comment-text");
  author.textContent = fullName;
  commentContent.textContent = userComment;

  let likeButton = document.createElement("button");
  likeButton.classList.add("like-button");
  likeButton.textContent = "Like";
  let replyButton = document.createElement("button");
  replyButton.classList.add("reply-button");
  replyButton.textContent = "Reply";

  commentDetails.append(author);
  commentDetails.append(commentContent);
  commentDetails.append(likeButton);
  commentDetails.append(replyButton);

  let commentSection = document.createElement("div");
  commentSection.classList.add("comment");
  commentSection.append(userImg);
  commentSection.append(commentDetails);
  commentContainer.append(commentSection);

  nameField.value = "";
  commentField.value = "";
  document.querySelector("#comment_btn").disabled = true;
}
