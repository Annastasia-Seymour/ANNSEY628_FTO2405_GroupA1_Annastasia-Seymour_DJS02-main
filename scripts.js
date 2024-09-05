const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const regex = /[a-zA-Z]+$/


function isString(inputSearch){
  if (regex.test(inputSearch)) {
    console.warn("Inputs should be numbers, not strings");
    return true;
  } else {
    return false;
  }
 
}
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);
try{
  if ((dividend === '') || (divider ==='')) {

    result.innerText ="Division not performed. Both values are required in inputs. Try again";
    console.warn("Fields cannot be empty");
    form.reset();  // Clear the inputs
    return;
  } 
  if (Number(divider) === 0 || Number(dividend === 0)) {
    result.innerText ="Division not performed. Invalid number provided. Try again ";
    console.error(`${dividend} cannot be divided by ${divider}, results in undefined`);
    form.reset();  
    return;
  //no need for what i was think submitButton() used form.reset instead;
  }
  if (isString(divider) || (isString(dividend))) {
   // result.innerText = "Division not performed. Invalid input. Only numbers are allowed.";
    //console.warn("Inputs should be numbers, not strings");
   throw Error("Invalid input detected: Non-numeric values entered");
    
   
  }
  
  const resultQuotient = Math.floor(dividend / divider);
    result.innerText = resultQuotient;
    console.log(dividend / divider);//outputs in the console includes remainder
    form.reset();
    return;
  
 }

catch (error) {
  //console.error(error);  // Log the error with the call stack i think
  //result.innerText = "An error occurred. Please try again.";
 // const originalForm = document.getElementById('Form');
 // Replace the entire screen content with a critical error message
 document.body.innerHTML = `<h1>Something critical went wrong. Please reload the page.</h1>`;
    
 // Log the error and call stack to the console
 console.error(error.stack);  // Logs the error along with the call stack
}
});
  
//}submitButton();
//remember to remove function? 

