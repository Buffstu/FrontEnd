
window.onload = (event) => {
  fetch('http://localhost:8080/posts', {
    method: 'GET',
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
  }).then(response => response.json())
      .then(data => addPosts(data))
};
function addPosts(data) {
  let list = document.getElementById('posts')
  data['_embedded']['posts'].forEach(
      (post) => {
          let postElement = document.createElement('li')
          postElement.innerText = post.content
          list.append(postElement)
      }
  )
}