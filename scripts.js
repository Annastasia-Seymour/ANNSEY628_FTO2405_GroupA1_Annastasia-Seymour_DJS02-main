const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

const inputDivider = document.getElementById("divider").value;
const inputDividend = document.getElementById("dividend").value;


if ((inputDividend.innerText = 'null') && (inputDivider.innerText ="null")){
  alert("Fields cannot be empty");
console.warn("Fields cannot be empty");

} else {
  submitButton();
}

function submitButton (){
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);
    result.innerText = dividend / divider;
  });
  
}



//let calculationResult = document.getElementById("calculationResult");