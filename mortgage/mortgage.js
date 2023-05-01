var p = Number(document.getElementById("pri"));
var r= Number(document.getElementById("intrate"));
var t = Number(document.getElementById("numy"));
var m = Number(document.getElementById("monpay"));
var n = 12;

function getSolve (p, r, t, m, n) {
    var d = r/n;
    var po = (1 + d)**(n*t);
    var eq = p*(po) - (m*(po - 1)) / d;
    return eq;
}

function calc() {
    var result = getSolve(p,r,t,m,n);
    document.writeln("mortgage: " + result +"</br>");
}

function reset() {
    document.getElementById("out").innerHTML = "";
    document.getElementById("pri").value = "";
    document.getElementById("intrate").value = "";
    document.getElementById("numy").value = "";
    document.getElementById("monpay").value = "";
}
