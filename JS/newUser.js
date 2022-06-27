
window.onload = function(){
  var form = document.getElementById("formPage");
  form.addEventListener("submit", newUserSubmit,true);
};

async function newUserSubmit(event) {
  event.preventDefault();
  const username = document.getElementById("username").value
  const password = document.getElementById("psw").value
  const passwordChecker = document.getElementById("pswCheck").value
  if(password === passwordChecker) {
    data = {username: username, password: password, enabled: true};
    let response = await fetch('https://rocky-forest-99036.herokuapp.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
     body:JSON.stringify(data)})
     if(response.status === 409){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Username ${username} is allready in use!`,
        footer: '<a href="">Why do I have this issue?</a>'
      })
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
      title: 'Password does not match',
      icon: 'error'
    })
    
  }
}



