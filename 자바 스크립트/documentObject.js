const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "userName"

function onLoginSubmit (event){
    event.preventDefault()
    const userName = loginInput.value
    loginForm.classList.add("hidden")
    console.log(USERNAME_KEY)
    localStorage.setItem("userName", USERNAME_KEY)
    greeting.innerText = "Hello " + USERNAME_KEY
    greeting.classList.remove("hidden")
}

loginForm.addEventListener("submit", onLoginSubmit) 

const saveUserName = localStorage.getItem(USERNAME_KEY)

if (saveUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
} else {
    greeting.classList.remove(HIDDEN_CLASSNAME)
}