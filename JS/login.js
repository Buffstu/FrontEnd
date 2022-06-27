window.onload = function(){
    var form = document.getElementById("loginForm");
    form.addEventListener("submit", loginSubmit,true);
};

function loginSubmit(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const url ="http://localhost:8080/login"
    let token = postData(url,{ "username": username, "password": password }).then(data => { console.log(data) });
}
 
async function postData(url = '', data = {}) { 
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        credentials: 'include',
        mode: "no-cors",
        referrerPolicy: "origin-when-cross-origin",
        body: JSON.stringify(data)
    });
    return response.json();
}

