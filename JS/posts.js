
window.onload = (event) => {
  var postForm = document.getElementById("newPostTextArea");
  postForm.addEventListener("submit", newPostSubmit, true);

  var profileNav = document.getElementById("btn_profile");
  profileNav.addEventListener("click", profileNavigate);

  var homeNav = document.getElementById("home");
  homeNav.addEventListener("click", homeNavigate);
  

  fetch('https://rocky-forest-99036.herokuapp.com/api/posts', {method: 'GET'})
      .then(response => response.json())
      .then(data => addPosts(data))
};


function addPosts(data) {
  let list = document.getElementById('posts')
  x = data['_embedded']['posts'].forEach(
      (post) => {
        let postElement = document.createElement('div')
        postElement.setAttribute("id", post['_links']['post']['href'].slice(-1));
        postElement.innerText = post.content
        
        
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
    window.location.href = "../../Views/Profile/profile.html"
  }

  function homeNavigate(){
    window.location.href = "../../Views/Feed/Feed.html"
  }

