let nameInput = document.getElementById("name");
let commentInput = document.getElementById("comment");
let commentList = document.getElementById("add_comments");
let addCommentButton = document.getElementById("comment_button");
let sortAscndButton = document.getElementById("sort_ascending");
let sortDscndButton = document.getElementById("sort_descending");

nameInput.addEventListener('input', validateForm);
commentInput.addEventListener('input', validateForm);
addCommentButton.addEventListener('click', addComment);
sortAscndButton.addEventListener('click', () => sortComments('asc'));
sortDscndButton.addEventListener('click', () => sortComments('desc'));

function validateForm() {
    let commentButton = document.getElementById("comment_button");

    let nameValue = nameInput.value.trim();
    let commentValue = commentInput.value.trim();

    if (nameValue !== '' && commentValue !== ''){
        commentButton.disabled = false;
    } else {
        commentButton.disabled = true;
    }
}

function addComment() {
    let addName = nameInput.value.trim();
    let addComment = commentInput.value.trim();

    if (addName && addComment){
        let commentItem = document.createElement("p");
        let currentDate = new Date();
        let dateString = currentDate.toLocaleString();
        commentItem.innerHTML = `${addName} - ${addComment} - ${dateString}`;
        commentList.appendChild(commentItem);

        nameInput.value = "";
        commentInput.value = "";
    }
}

function sortComments(order) {
    let comments = Array.from(commentList.children);
    comments.sort((a, b) => {
        let dateA = new Date(getCommentDate(a));
        let dateB = new Date(getCommentDate(b));
        return order === 'asc' ? dateA - dateB : dateB - dateA;
    });

    // Clear the current list
    commentList.innerHTML = "";

    // Append the sorted comments
    comments.forEach(comment => {
        commentList.appendChild(comment);
    });
}

function getCommentDate(comment) {
    // Extracts the date string from the comment content
    let commentParts = comment.innerText.split('-');
    if (commentParts.length > 2) {
        return commentParts[2].trim();
    }
    return "";
}
