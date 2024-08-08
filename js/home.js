//Gain access to the parent of the info / the form
var modal = document.getElementById("booking-modal");
// Get the button that opens the form
var btn = document.getElementById("modalBtn");
// Get the <span> element that closes the form
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the form
btn.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the form
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the form, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}