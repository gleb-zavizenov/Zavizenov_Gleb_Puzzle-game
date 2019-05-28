(() => {
  
  //checking js connection
  console.log("JS works");

  // declare variables
  let secondHeader = document.getElementById("header2");
  let thirdHeader = document.getElementById("header3"),
      theButton = document.querySelector("button");

  //function
  function changeText() {
    secondHeader.textContent = "Now I'm different";
    thirdHeader.textContent = "I am also different";
  }

  theButton.addEventListener("click",changeText);

})();
