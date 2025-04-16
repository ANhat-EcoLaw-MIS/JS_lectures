document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementsByClassName("normal-form").item(0);
    const validateInput = function(x){
        // console.log(x);
        // console.log(typeof parseInt(x));
        if (x && typeof parseInt(x) === "number" && parseInt(x) > 0) {
            return parseInt(x);
        }else{
            return null;
        }
    }
    const calculateTotal= function (x){
        let increment =0;
        if (x < 40){
            increment += 10;
        }
        return x + increment;
    }
    const updateTotal = function(total){
        let p = document.querySelector(".normal-form > p");
        const default_value = p.innerText.substring(0,6);
        p.innerText = default_value + ' '+ total.toString() + '$';
    }
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let userInput = validateInput(document.getElementById("field-input").value);
        if(!userInput){
            alert("Please enter a valid number");
            return false;
        }
        const total = calculateTotal(userInput);
        updateTotal(total);
    });
});
