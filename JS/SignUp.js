
window.onload = function(){
  var form = document.getElementById("formPage");
  form.addEventListener("submit", newUserSubmit,true);

  var profileNav = document.getElementById("btn_profile");
  profileNav.addEventListener("click", profileNavigate);

  var homeNav = document.getElementById("home");
  homeNav.addEventListener("click", homeNavigate);
};

async function newUserSubmit(event) {
  event.preventDefault();
  const username = document.getElementById("username").value
  const password = document.getElementById("psw").value
  const passwordChecker = document.getElementById("pswCheck").value
  if(password === passwordChecker) {
    data = {username: username, password: password, enabled: true};
    let response = await fetch('https://rocky-forest-99036.herokuapp.com/users/new', {
    method: 'POST',
    credentials: "include",
    mode: "cors",
    headers: {
      'Content-Type': 'application/json'
    },
     body:JSON.stringify(data)})
     if(response.status === 409){
      Swal.fire({
        icon: 'error',
        title: 'too bad!',
        text: `Username ${username} is allready in use!`
      })
     } else {
       window.location.href = "../../Views/Feed/Feed.html"
     }
  } else {
    let toastMixin = Swal.mixin({
      toast: true,
    icon: 'success',
    title: 'General Title',
    animation: false,
    position: 'top-right',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });
    
    toastMixin.fire({
      title: 'Passwords need to match',
      icon: 'error'
    })
    
  }
}

function profileNavigate() {
  window.location.href = "../../Views/Profile/profile.html"
}

function homeNavigate(){
  window.location.href = "../../Views/Feed/Feed.html"
}



