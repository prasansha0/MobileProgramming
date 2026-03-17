function calculateResult() {

    let totalMarks = 
        Number (document.getElementsById("m1").value) +
        Number (document.getElementsById("m2").value) +
        Number (document.getElementsById("m3").value) +
        Number (document.getElementsById("m4").value) +
        Number (document.getElementsById("m5").value) +
        Number (document.getElementsById("m6").value) +
        Number (document.getElementsById("m7").value) +
        Number (document.getElementsById("m8").value);
    let totalText = document.getElementById("total");
    let resultText = document.getElementById("result");

    totalText.innerHTML = "Total Marks: "+ totalMarks +" / 800";

    if (totalMarks >= 700) {
        resultText.innerHTML = "DISTINCTION";
        resultText.style.color = "green";
    }
    else if (totalMarks <700) {
        resultText.innerHTML = "First Division";
    }
    else if (totalMarks <600) {
        resultText.innerHTML = "Second Division";
    }
    else if (totalMarks <500) {
        resultText.innerHTML = "Third Division";
    }
    else
        resultText.innerHTML = "FAIL";
        resultText.style.color = "red";
}