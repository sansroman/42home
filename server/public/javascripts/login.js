window.onload = function () {
    const loginBtn = document.querySelector("button");
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const loginUrl = "http://127.0.0.1:3000/admin";
    const alert = document.querySelector('.alert-label');
    loginBtn.addEventListener('click', (event) => {
        event.preventDefault();
        var userInfo = initUser(username.value, password.value)
        if (username.value == '' || password.value == '') {
            alert.textContent = "username or password can not empty."
            alert.removeAttribute('hidden')
        } else {
            var userInfo = initUser(username.value, password.value)
            ajax.post(loginUrl, userInfo, function (ajaxObj) {
                if (ajaxObj.err) {
                    alert.textContent = ajaxObj.context;
                    alert.removeAttribute('hidden');
                } else {
                    window.location = loginUrl;
                }
            })
        }
        return false;
    })
}

function initUser(username, password) {
    var userObj = {
        username: username,
        password: password
    }
    return JSON.stringify(userObj);
}