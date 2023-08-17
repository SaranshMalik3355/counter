// Html elements selection
let counter = document.getElementById("counter_no");
let uppbtn = document.getElementById("upp");
let dwnbtn = document.getElementById("down");
let rstbtn = document.getElementById("reset");

//counter varible
const lowerLimit = 0;
const upperlimit = 10;
let realCounter = 0;
//Upp button
uppbtn.addEventListener("click", () => {
  realCounter++;
  if (realCounter > upperlimit) {
    realCounter = upperlimit;
  }
  counter.innerHTML = realCounter;
});

//down button
dwnbtn.addEventListener("click", () => {
  realCounter--;
  if (realCounter < lowerLimit) {
    realCounter = lowerLimit;
  }
  counter.innerHTML = realCounter;
});
// Reset button
rstbtn.addEventListener("click", () => {
  realCounter = 0;
  counter.innerHTML = realCounter;
});
