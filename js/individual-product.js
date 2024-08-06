// Get references to the counter element
const counterElement = document.getElementById("counter");
//get references to the buttons by id
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
// Set initial count to be 0
let count = 0;

// Function to update the counter text to be the count
function updateCounter() {
    counterElement.value = count;
}

// Event listener for each button change count variable accordingly and then update count text using previous function
incrementButton.addEventListener("click", function() {
    count++;
    updateCounter();
});

decrementButton.addEventListener("click", function() {
    if(count > 1){
        count--;
        updateCounter();
    }
});