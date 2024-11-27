console.log(`============== Sanity Check For Index.js ==============`);
// const clickMe = document.getElementById("clickMe");
// console.log(clickMe);
// clickMe.addEventListener("click", testButton);
// const testDiv = document.getElementsByClassName("start-button-div");
// console.log(testDiv);

// testDiv.addEventListener("click", testButton);
const clickMe = document.querySelector("#div-button");
// console.log(clickMe);
clickMe.addEventListener("click", testButton);
function testButton(e) {
  alert("You have hit your target");
}
