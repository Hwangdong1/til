const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")

function onLoginSubmit (event){
    event.preventDefault()
    const userName = loginInput.value
    console.log(userName)
}
loginForm.addEventListener("submit", onLoginSubmit)
