var message = "Hours&emsp;Pay</br>";
var con = 1;
while (con <= 40) {
    message += con + "&emsp;&emsp;&emsp;" + con*4 + "</br>";
    con++;
}

document.getElementById("out").innerHTML = message;