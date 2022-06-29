
window.onload = (event) => {
  var postForm = document.getElementById("newPostTextArea");
  postForm.addEventListener("submit", newPostSubmit, true);

  var profileNav = document.getElementById("btn_profile");
  profileNav.addEventListener("click", profileNavigate);

  var homeNav = document.getElementById("home");
  homeNav.addEventListener("click", homeNavigate);

  var search = document.getElementById("search_btn");
  search.addEventListener("click", searchToggle);
  

  fetch('https://rocky-forest-99036.herokuapp.com/posts', {
    method: 'GET',
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type":
      "application/json",
      "Authorization":"Bearer"
    },
  })
      .then(response => response.json())
      .then(data => addPosts(data))
};


function addPosts(data) {
  x = data['_embedded']['posts'].forEach(
      (post) => {
        let postElement = document.createElement('div')
        postElement.setAttribute("class", "posts");
        postElement.setAttribute("id", post['_links']['post']['href'].slice(-1));
        postElement.innerText = post.content
        document.body.append(postElement)
        console.log(postElement)
        
      }
  )
}


async function newPostSubmit(event) {
  event.preventDefault();
  const content = document.getElementById("newPost").value
  data = {content: content};
  let response = await fetch('https://rocky-forest-99036.herokuapp.com/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(data)})
}

function profileNavigate() {
  console.log("hit");
  window.location.href = "../../Views/Profile/profile.html"
}

function homeNavigate(){
  window.location.href = "../../Views/Feed/Feed.html"
}

function searchToggle(){
  if(document.getElementById("search_text").style.opacity == 0) {
    document.getElementById("search_text").style.opacity = 1;
  } else{
    document.getElementById("search_text").style.opacity = 0;
  }
  
}
