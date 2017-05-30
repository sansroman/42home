const loginBtn = document.querySelector("button");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const loginUrl = "http://127.0.0.1:3000/login";
let myHeaders = new Headers();
let myInit = {
    method: 'POST',
    headers: myHeaders,
    mode: 'cors',
    cache:'default'
}
loginBtn.addEventListener("click", (e) => {
    let form = new FormData();
    form.append("username", username.value)
    form.append("password", password.value)
    myInit.body = form;
    fetch(loginUrl, myInit).then((res) => {
        return res.json()
    }).then((json) => {
        console.log(json)
    })
    e.preventDefault();
})