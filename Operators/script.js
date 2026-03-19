function calculate(operator){
    let n1 = Number (document.getElementById("n1").value); 
    let n2 = Number (document.getElementById("n2").value);

    let result;

    if (operator == 'add') {
        result = n1+n2
    }
    else if (operator == 'sub') {
        result = n1-n2
    }
    else if (operator == 'mul') {
        result = n1*n2
    }
    else {
        result = n1/n2
    }

    document.getElementById("result").innerHTML = "Result: "+ result;
}
