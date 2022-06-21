console.log("hit")

window.onload = (event) => {
  fetch('https://rocky-forest-99036.herokuapp.com/api/posts', {method: 'GET'})
      .then(response => response.json())
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