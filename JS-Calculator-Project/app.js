const calculator = document.querySelector(".calculator");
const previous = document.querySelector(".previous-display");
const current = document.querySelector(".current-display");

const plus = document.querySelector(".addition");
const subtraction = document.querySelector(".subtraction");
const multiply = document.querySelector(".multiplication");
const division = document.querySelector(".division");
const percent = document.querySelector(".percent");
const equal = document.querySelector(".equal");
const pm = document.querySelector(".pm");
// const operator = document.querySelectorAll(".operator");

const buton = document.querySelectorAll(".button");
const number0 = document.querySelector(".number-0");
const number1 = document.querySelector(".number-1");
const number2 = document.querySelector(".number-2");
const number3 = document.querySelector(".number-3");
const number4 = document.querySelector(".number-4");
const number5 = document.querySelector(".number-5");
const number6 = document.querySelector(".number-6");
const number7 = document.querySelector(".number-7");
const number8 = document.querySelector(".number-8");
const number9 = document.querySelector(".number-9");
const numberButtons = document.querySelectorAll(".num");

let numbers = "0";
let firstnumber ;
let secondnumber ;
let result;
let operator ;
let nokta = true

number1.onclick = () => {
    if (numbers == "0") {
        numbers = "1";
        current.innerHTML = numbers;
    } else {
        numbers = numbers + "1"
        current.innerHTML = numbers ;
    }
}
number2.onclick = () => {
    if (numbers == "0") {
        numbers = "2";
        current.innerHTML = numbers;
    } else {
        numbers = numbers + "2"
        current.innerHTML = numbers ;
    }
}
number3.onclick = () => {
    if (numbers == "0") {
        numbers = "3";
        current.innerHTML = numbers;
    } else {
        numbers = numbers + "3"
        current.innerHTML = numbers ;
    }
}
number4.onclick = () => {
    if (numbers == "0") {
        numbers = "4";
        current.innerHTML = numbers;
    } else {
        numbers = numbers + "4"
        current.innerHTML = numbers ;
    }
}
number5.onclick = () => {
    if (numbers == "0") {
        numbers = "5";
        current.innerHTML = numbers;
    } else {
        numbers = numbers + "5"
        current.innerHTML = numbers ;
    }
}
number6.onclick = () => {
    if (numbers == "0") {
        numbers = "6";
        current.innerHTML = numbers;
    } else {
        numbers = numbers + "6"
        current.innerHTML = numbers ;
    }
}
number7.onclick = () => {
    if (numbers == "0") {
        numbers = "7";
        current.innerHTML = numbers;
    } else {
        numbers = numbers + "7"
        current.innerHTML = numbers ;
    }
}
number8.onclick = () => {
    if (numbers == "0") {
        numbers = "8";
        current.innerHTML = numbers;
    } else {
        numbers = numbers + "8"
        current.innerHTML = numbers ;
    }
}
number9.onclick = () => {
    if (numbers == "0") {
        numbers = "9";
        current.innerHTML = numbers;
    } else {
        numbers = numbers + "9"
        current.innerHTML = numbers ;
    }
}
number0.onclick = () => {
    if (numbers == "0") {
        numbers = "0";
        current.innerHTML = numbers;
    } else {
        numbers = numbers + "0"
        current.innerHTML = numbers ;
    }
}




// Nokta koyma
document.querySelector(".decimal").onclick = ()=>{

    if (numbers == null || numbers == "0") {
        numbers = "0." 
        nokta = false;
        previous.innerHTML = numbers;
        
    } else {
        nokta = true; 
        for (const key in numbers) {
            if (numbers[key] == ".") {
                nokta = false;
            }
        }
        if (nokta){ 
           numbers += "."
           nokta = false;
           previous.innerHTML = numbers; 
        }
    }
}






//?   Cikarma islemi

subtraction.onclick = () => {
    
    operator = "-";
    firstnumber = +(numbers);
    previous.innerHTML = firstnumber + "-";
    numbers = "0"
    secondnumber = +(numbers);
    hesapla();
    current.innerHTML = secondnumber
    
}

//?   Toplama islemi

plus.onclick = () => {
    
    operator = "+";
    firstnumber = +(numbers);
    previous.innerHTML = firstnumber + "+";
    numbers = "0"
    secondnumber = +(numbers);
    hesapla();
    current.innerHTML = secondnumber
    
}

//?  carpma islemi

multiply.onclick = () => {
    
    operator = "*";
    firstnumber = +(numbers);
    previous.innerHTML = firstnumber + "*";
    numbers = "0"
    hesapla();
    secondnumber = +(numbers);
    current.innerHTML = secondnumber
    
}

//?  bölme islemi

division.onclick = () => {
    
    operator = "/";
    firstnumber = +(numbers);
    previous.innerHTML = firstnumber + "/";
    numbers = "0"
    hesapla();
    secondnumber = +(numbers);
    current.innerHTML = secondnumber
    
}

const reloadButton = document.querySelector("#reload");
// // Reload everything:
function reload() {
    reload = location.reload();

    // // Event listeners for reload
    reloadButton.addEventListener(click, reload);
}

percent.onclick = () => {
    let yüzde = operator;
    operator = "%";
    hesapla();
    operator = yüzde ;
}

pm.onclick = () => {
    numbers = +(numbers) * (-1);
    previous.innerHTML = numbers
}


equal.onclick = () => {
    secondnumber = +(numbers)
    previous.innerHTML = firstnumber.toString() + operator + secondnumber.toString() + "=";
    hesapla()
}




//? Operator Kismi

const hesapla = () => {

    switch (operator) {
        case "-":
            result = firstnumber - secondnumber ;
            current.innerHTML = result;
            
            break;
        case "+":
            result = firstnumber + secondnumber ;
            current.innerHTML = result;
            
            break;
        case "*":
            result = firstnumber * secondnumber ;
            current.innerHTML = result;
            
            break;
        case "/":
            result = firstnumber / secondnumber ;
            current.innerHTML = result;
            
            break;
        case "%":
            result = numbers / 100 ;
            current.innerHTML = result;
            
            break;
    
        default:
            break;
    }





}


