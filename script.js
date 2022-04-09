
const getForm = document.getElementById("rate-form");

getForm.addEventListener("submit", getRating);

function getRating(event) {
  event.preventDefault();

  const ratings = document.querySelector('input[name="rating"]:checked').value;
  
  $('#submit-button').on("click", function() {

    $("#thank-you-content").toggle();
    $("#rating-content").toggle();
    $(".rate-content").html(`You selected ${ratings} out of 5`);
    setTimeout(function(){
       $("#rating-content").toggle();
      $("#thank-you-content").toggle();
    }, 2000);
   
   })
}










 








