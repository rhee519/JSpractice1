const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.style.color = "brown";
  console.log("Title was clicked!");
}
 
function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
   console.log("Mouse is here!");
}

function handelMouseLeave() {
    h1.innerText = "Mouse is gone!";
    console.log("Mouse is gone!");
}

function handleWindowResize() {
    document.body.style.background = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI!");
}

function handleWindowOnline() {
    alert("All Good!!");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handelMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);