const gcd = function (a, b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}
function doMore(e) {
    let inputFraction1 = document.getElementById("fraction1").value;
    let arr = inputFraction1.split('/');
    let t = arr[0];
    let n = arr[1];
    let xyz =  gcd(t, n);
    t = t / xyz;
    n = n / xyz;
    let result = "result: " + t + "/" + n;
    console.log(result);
    document.getElementById('result').innerHTML = result;
    e.preventDefault();
    return false;
}

function doSomething () {
    let form1 = document.getElementById("form1");
    form1.addEventListener('submit', doMore);
}


window.addEventListener('load', doSomething);