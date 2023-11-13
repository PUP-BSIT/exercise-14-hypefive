let nameInput = document.getElementById("name");
let commentInput = document.getElementById("comment");
let commentList = document.getElementById("add_comments")
let addCommentButton = document.getElementById("comment_button")
    
nameInput.addEventListener('input', validateForm);
commentInput.addEventListener('input', validateForm);
addCommentButton.addEventListener('click', addComment)

function validateForm() {
    let commentButton= document.getElementById("comment_button");

    let nameValue = nameInput.value.trim();
    let commentValue = commentInput.value.trim();

    if (nameValue !== '' && commentValue !== ''){
        commentButton.disabled=false;
    }
    else{
        commentButton.disabled=true;
    }
}

function addComment() {
    let addName = nameInput.value.trim();
    let addComment = commentInput.value.trim();

    if (addName && addComment){
        let commentItem = document.createElement("p");
        commentItem.innerHTML = `${addName} - ${addComment}`;
        commentList.appendChild(commentItem);

        addName = "";
        addComment = "";
    }
}