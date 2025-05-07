document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World");
  });

// This function not needed, kept for example...
// function main() {
//   const userInput = prompt("Please enter your name...")
//   console.log("Hello, " + userInput + "! Nice to meet you!")
// }

document.addEventListener("DOMContentLoaded", main);

const abortController = new AbortController();
let requestInFlight = undefined;
 
 
function main() {
    // getting the input element
    input.addEventListener("change", () => {
        if(requestInFlight) {
            abortController.abort("new request");
        }
    })
}
 
 
document.addEventListener("DOMContentLoaded", main);