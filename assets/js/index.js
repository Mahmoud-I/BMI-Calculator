let weigth = document.querySelector("#weight");
let height = document.querySelector("#height");
let calc = document.querySelector(".calc");
let reset = document.querySelector(".reset");
let resultDisplay = document.querySelector(".result")

calc.addEventListener("click", function(){
    let result = Number(weigth.value) / Number(Math.pow(height.value, 2))
    result = Math.round(result)
    resultDisplay.innerHTML = result + "<span>kg/m<sup>2</sup></span>"
        
    if(typeof(result) === "string") {
        resultDisplay.innerHTML = "Error"
        resultDisplay.classList.add("error")
    }
    
})

reset.addEventListener("click", function(){
    resultDisplay.innerHTML = "0.00<span>kg/m<sup>2</sup></span>"
    weigth.value = " "
    height.value = " ";
    resultDisplay.classList.remove("error")
})