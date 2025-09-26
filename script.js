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


// Add a wheel event listener to detect scroll direction
document.querySelector("body").addEventListener('wheel', (e) => {
  e.preventDefault(); // Optional, prevents default scroll behavior

  // Change the background color based on scroll direction
  if (e.deltaY < 0) { // scrolled up
    document.body.style.backgroundColor = '#7327b1ff'; // Purple background
  } else if (e.deltaY > 0) { // scrolled down
    document.body.style.backgroundColor = '#a8b127ff'; // Yellow-green background
  }
});

