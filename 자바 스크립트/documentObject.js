const h1 = document.querySelector(".hello:first-child h1")

function handleTitleClick(){
    h1.style.color="blue"
}
function handleTitleEnter(){
    h1.innerText = "Mouse is here"
}
function handleWindowResize(){
    document.body.style.backgroundColor="tomato"
}
function handleWindowCopy(){
    alert("copier!")
}
function handleWindowOffline(){
    alert("인터넷 연결 안됨")
}
function handleWindowOnline(){
    alert("인터넷 연결  어쩌라고")
}



h1.onclick=handleTitleClick
h1.addEventListener("mouseenter",handleTitleEnter)


window.addEventListener("resize", handleWindowResize)
window.addEventListener("copy",handleWindowCopy)
window.addEventListener("offline", handleWindowOffline)
window.addEventListener("online", handleWindowOnline)
