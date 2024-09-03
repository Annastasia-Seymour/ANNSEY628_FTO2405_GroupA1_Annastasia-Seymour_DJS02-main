const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

/*const inputDivider = document.getElementById("divider");
const inputDividend = document.getElementById("dividend");

function validationInput(){
  if ((inputDividend.innerHTML = 'null') && (inputDivider.innerHTML ="null")){
    alert("Fields cannot be empty");
  console.warn("Fields cannot be empty");
  
  } else {
    submitButton();
  }
}*/


function submitButton (){
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);
    result.innerText = Math.floor(dividend / divider);
  });
  
}
submitButton();


//let calculationResult = document.getElementById("calculationResult");