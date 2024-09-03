const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

function submitButton (){
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);

if ((dividend === '') || (divider ==='')) {
  //alert("Fields cannot be empty");
  result.innerText ="Division not performed. Both values are required in inputs. Try again";
  console.warn("Fields cannot be empty");
  
} else if ((divider > dividend) || (divider === "0")) {
  result.innerText ="Division not performed. Invalid number provided. Try again";
  console.error(`${dividend} cannot be divided by ${divider}, results in undefined`);

}
else {
  result.innerText = Math.floor(dividend / divider);
}
});
  
}


submitButton();
//remember to remove function? 

