const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
//const regex = /^pet_\d{4}[a-zA-Z]+$/

function submitButton (){
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);
try{
  if ((dividend === '') || (divider ==='')) {

    result.innerText ="Division not performed. Both values are required in inputs. Try again";
    console.warn("Fields cannot be empty");
    form.reset();  // Clear the inputs
    
  } else if(Number(divider === 0)) {
    result.innerText ="Division not performed. Invalid number provided. Try again";
    console.error(`${dividend} cannot be divided by ${divider}, results in undefined`);
    form.reset();  
  //no need for what i was think submitButton() used form.reset instead;
  }
    else if (isNaN(Number(divider)) || (isNaN(Number(dividend)))) {
    result.innerText ="Please enter a numeric value";
    form.reset(); 
   
  }
    else {
    result.innerText = Math.floor(dividend / divider);
    console.log(dividend / divider);
    
  }
}

catch (error) {
  console.error(error);  // Log the error with the call stack i think
  result.innerText = "An error occurred. Please try again.";
}
});
  
}


submitButton();
//remember to remove function? 

