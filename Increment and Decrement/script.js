let minusone = document.querySelector("#minusbutton");
let plusone = document.querySelector("#plusbutton");
let currentvalue = document.querySelector("#valuebutton");

minusone.addEventListener('click', function() {
    // Get the current value from the element and convert it to a number
    let value = parseInt(currentvalue.textContent);
    // Decrement the value
    value -= 1;
    // Update the text content
    currentvalue.textContent = value;
});

plusone.addEventListener('click', function() {
    // Get the current value from the element and convert it to a number
    let value = parseInt(currentvalue.textContent);
    // Increment the value
    value += 1;
    // Update the text content
    currentvalue.textContent = value;
});
