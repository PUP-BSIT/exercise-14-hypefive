let form = document.getElementById("comment_form");

form.addEventListener("submit", function(event) {
    
  event.preventDefault();
  event.preventDefault();
  
  let fullName = document.getElementById("full_name").value;
  let comments = document.getElementById("comments").value;
  
  if (fullName && comments) {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = fullName + ":";
    
    let p = document.createElement("p");
    p.textContent = comments;
    
    let button = document.createElement("button");
    button.textContent = "Delete";
    
    button.addEventListener("click", function() {
      li.remove();
    });
    
    li.appendChild(span);
    li.appendChild(p);
    li.appendChild(button);
    
    let list = document.getElementById("comment_list");
    list.appendChild(li);
    
    form.reset();
  }
});