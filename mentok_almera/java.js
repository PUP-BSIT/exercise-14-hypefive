let commenterName = document.getElementById('commenter_name');
let commenterText = document.getElementById('comment_text');
let commentButton = document.getElementById('comment_button');
let commentList = document.getElementById('data_list');

commenterName.addEventListener('input', validateForm);
commenterText.addEventListener('input', validateForm);
commentButton.addEventListener('click', addComment);

function validateForm() {
    let nameValue = commenterName.value.trim();
    let commentValue = commenterText.value.trim();

    if (nameValue && commentValue) {
        commentButton.disabled = false;
    } else {
        commentButton.disabled = true;
    }
}

function addComment() {
    let addName = commenterName.value.trim();
    let addComment = commenterText.value.trim();

    if (addName && addComment) {
        let commentItem = document.createElement("p");
        commentItem.textContent = `${addName} - ${addComment}`;
        commentList.appendChild(commentItem);

        commenterName.value = ""; 
        commenterText.value = "";
        commentButton.disabled = true; 
    }
}
