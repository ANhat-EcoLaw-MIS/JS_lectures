document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementsByClassName("normal-form").item(0);
    const list=document.getElementById("footer-list");
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
    let p = document.querySelector(".normal-form > p");
    const normal_p = p.innerHTML;
    const updateTotal = function(total){
        const default_value = p.innerText.substring(0,6);
        p.innerText = default_value + ' '+ total.toString() + '$';
    }
    const addToList=function(total){
        list.innerHTML += `<li>${total}$</li>`;
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
        addToList(total);
        document.getElementById("field-input").value = "";
    });
    form.addEventListener("reset", function (event) {
        p.innerHTML = normal_p;
    })
});
