let getAllRatingButtons = document.querySelectorAll(".rating-btn");
let buttonOne = document.getElementsByClassName("one")[0];
let buttonTwo = document.getElementsByClassName("two")[0];
let buttonThree = document.getElementsByClassName("three")[0];
let buttonFour = document.getElementsByClassName("four")[0];
let buttonFive = document.getElementsByClassName("five")[0];
let submitButton = document.querySelector(".submit-btn");



let buttonArray = [
  buttonOne,
  buttonTwo,
  buttonThree,
  buttonFour,
  buttonFive
]

submitButton.addEventListener("click", function() {
  for (let i = 0; i < buttonArray.length; i++) {
    if(buttonArray[0]) {
      document.getElementById("thank-you-content").style.display = "block";
      document.getElementById("rating-content").style.display = "none";
      document.getElementsByClassName("rate-content")[0].innerHTML = "You selected 1 out of 5";
    } else if (buttonArray[1]) {
      document.getElementById("thank-you-content").style.display = "block";
      document.getElementById("rating-content").style.display = "none";
      document.getElementsByClassName("rate-content")[0].innerHTML = "You selected 2 out of 5";
    }
  }
}); 





 








