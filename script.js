let containerElement = document.querySelector("#containerId");
let customMenuElement = document.querySelector("#customMenuId");

containerElement.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // Prevent the default right-click menu

    // Show the custom menu
    customMenuElement.style.display = "block";

    // Position the custom menu at the mouse click location
    customMenuElement.style.left = `${e.pageX}px`;
    customMenuElement.style.top = `${e.pageY}px`;
});

//Hide the menu when clicking elsewhere
document.addEventListener("click", () => {
    customMenuElement.style.display = "none";
});

document.querySelector("#customMenuItem1").addEventListener("click", (e)=>{
    alert("You Clicked Option 1");
});

document.querySelector("#customMenuItem2").addEventListener("click", (e)=>{
    alert("You Clicked Option 2");
});

document.querySelector("#customMenuItem3").addEventListener("click", (e)=>{
    alert("You Clicked Option 3");
});