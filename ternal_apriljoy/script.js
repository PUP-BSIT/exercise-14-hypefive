function onInput() {
  let myName = document.getElementById("name");
  let myComment = document.getElementById("comment");

  if (myName.value.length && myComment.value.length) {
    document.getElementById("comment_button").disabled = false;
  } else {
    document.getElementById("comment_button").disabled = true;
  }
}

function submitComment(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const commentText = document.getElementById("comment").value;

  if (name && commentText) {
    let nameInfo = document.createElement("div");
    nameInfo.className = "name-info";

    let userInfo = document.createElement("div");
    userInfo.className = "user-info";

    let newComment = document.createElement("div");
    newComment.className = "comment";

    let userImage = document.createElement("img");
    userImage.src = "images/defaultprofile.png";
    userImage.alt = "User Image";

    let nameHeading = document.createElement("h3");
    nameHeading.className = "name";
    nameHeading.textContent = name;

    let usernameP = document.createElement("p");
    usernameP.className = "username";
    usernameP.textContent = "@" + name.toLowerCase().replace(/\s/g, "");

    let userCommentP = document.createElement("p");
    userCommentP.className = "userComment";
    userCommentP.textContent = commentText;

    // Construct the comment structure
    nameInfo.appendChild(nameHeading);
    nameInfo.appendChild(usernameP);
    userInfo.appendChild(userImage);
    userInfo.appendChild(nameInfo);
    newComment.appendChild(userInfo);
    newComment.appendChild(userCommentP);

    // Append the new comment to the comment container
    const commentContainer = document.querySelector(".user-comment-container");
    commentContainer.appendChild(newComment);
    newComment.scrollIntoView({ behavior: "smooth", block: "start" });

    // Clear the input fields after appending the comment to disable the button
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
    document.getElementById("comment_button").disabled = true;
  }
}
