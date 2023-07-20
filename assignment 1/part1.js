function validation(){
    if(isNaN(document.getElementById('num1').value) && document.getElementById('num2').value === "")
    {
        document.getElementById('notNum1').innerHTML = '*Enter valid number'
        document.getElementById('notNum1').style.color = "red"
        document.getElementById('notNum2').style.color = "red"
        document.getElementById('notNum2').innerHTML = '*Please enter the number'
        document.getElementById('div1').innerHTML = "undefined";
        return false;
    }
    else if(isNaN(document.getElementById('num2').value) && document.getElementById('num1').value === "")
    {
        document.getElementById('notNum2').innerHTML = '*Enter valid number'
        document.getElementById('notNum2').style.color = "red"
        document.getElementById('notNum1').style.color = "red"
        document.getElementById('notNum1').innerHTML = '*Please enter the number'
        document.getElementById('div1').innerHTML = "undefined";
        return false;
    }
    else if(document.getElementById('num1').value === "" && document.getElementById('num2').value === "") {
        document.getElementById('notNum1').innerHTML = '*Please enter the number'
        document.getElementById('notNum1').style.color = "red"
        document.getElementById('notNum2').innerHTML = '*Please enter the number'
        document.getElementById('notNum2').style.color = "red"
        document.getElementById('div1').innerHTML = "undefined";
        return false;
    }
    else if (document.getElementById('num1').value === "") {
        document.getElementById('notNum1').innerHTML = '*Please enter the number'
        document.getElementById('notNum1').style.color = "red"
        document.getElementById('notNum2').innerHTML = ""
        document.getElementById('div1').innerHTML = "undefined";
        return false;
    }
    else if (document.getElementById('num2').value === "") {
        document.getElementById('notNum2').innerHTML = '*Please enter the number'
        document.getElementById('notNum2').style.color = "red"
        document.getElementById('notNum1').innerHTML = ""
        document.getElementById('div1').innerHTML = "undefined";
        return false;
    }
    
    else if (isNaN(document.getElementById('num1').value) && isNaN(document.getElementById('num2').value)) {
        document.getElementById('notNum1').innerHTML = '*Enter valid number'
        document.getElementById('notNum1').style.color = "red"
        document.getElementById('notNum2').innerHTML = '*Enter valid number'
        document.getElementById('notNum2').style.color = "red"
        document.getElementById('div1').innerHTML = "undefined";
        return false;
    }
    else if (isNaN(document.getElementById('num1').value)) {
        document.getElementById('notNum1').innerHTML = '*Enter valid number'
        document.getElementById('notNum1').style.color = "red"
        document.getElementById('notNum2').innerHTML = ""
        document.getElementById('div1').innerHTML = "undefined";
        return false;
    }
    else if (isNaN(document.getElementById('num2').value)) {
        document.getElementById('notNum2').innerHTML = '*Enter valid number'
        document.getElementById('notNum2').style.color = "red"
        document.getElementById('notNum1').innerHTML = ""
        document.getElementById('div1').innerHTML = "undefined";
        return false;
    }
    else
    {
        return true;
    }
}

function Addition() {
    if(validation() === true)
    {
        let a = parseInt(document.getElementById('num1').value)
        let b = parseInt(document.getElementById('num2').value)
        console.log(a + b)
        var add = a + b
        document.getElementById('div1').innerHTML = add;
        document.getElementById('notNum1').innerHTML = ''
        document.getElementById('notNum2').innerHTML = ''
    }
}

function Subtraction() {
    if(validation() === true)
    {
        let a = parseInt(document.getElementById('num1').value)
        let b = parseInt(document.getElementById('num2').value)
        console.log(a - b)
        var sub = a - b
        document.getElementById('div1').innerHTML = sub;
        document.getElementById('notNum1').innerHTML = ''
        document.getElementById('notNum2').innerHTML = ''
    }
}

function Multiplication() {
    if(validation() === true)
    {
        let a = parseInt(document.getElementById('num1').value)
        let b = parseInt(document.getElementById('num2').value)
        console.log(a * b)
        var mul = a * b
        document.getElementById('div1').innerHTML = mul;
        document.getElementById('notNum1').innerHTML = ''
        document.getElementById('notNum2').innerHTML = ''
    }
}

function Division() {
    if(validation() === true)
    {
        let a = parseInt(document.getElementById('num1').value)
        let b = parseInt(document.getElementById('num2').value)
        console.log(a / b)
        var div = a / b
        document.getElementById('div1').innerHTML = div;
        document.getElementById('notNum1').innerHTML = ''
        document.getElementById('notNum2').innerHTML = ''
    }
}

function Modulus() {
    if(validation() === true)
    {
        let a = parseInt(document.getElementById('num1').value)
        let b = parseInt(document.getElementById('num2').value)
        console.log(a % b)
        var mod = a % b
        document.getElementById('div1').innerHTML = mod;
        document.getElementById('notNum1').innerHTML = ''
        document.getElementById('notNum2').innerHTML = ''
    }
}