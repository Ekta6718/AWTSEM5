const form = document.querySelector("form");
const Username = document.getElementById("Username");
const Fullname = document.getElementById("Fullname");
const Password = document.getElementById("Password");
const Confirm_Password = document.getElementById("Confirm_Password");
const Phone_No = document.getElementById("Phone_No");
const Email = document.getElementById("Email");
const State = document.getElementById("State");
const Gender = document.getElementsByName("Gender");
const Agreement = document.getElementById("Agreement");
console.log(Phone_No.value);
form.addEventListener("submit", (e) => {
    let valid = true;
    if (Username.value === "") {
        e.preventDefault();
        // error_msg.style.color = "red"
        // error_msg.textContent = "You need to fill Username";
        alert("You need to fill Username");
        valid = false;
        return 0;
    } else {
        if (Username.value.length <= 4) {
            e.preventDefault();
            valid = false;
            alert("Username must have atleast 5 characters");
            return 0;
        }
    }

    if (Fullname.value === "") {
        e.preventDefault();
        valid = false;
        alert("You need to fill Fullname");
        // document.getElementById("enterfullname").innerHTML = "You need to fill Fullname"
        // document.getElementById("enterfullname").style.color = "red"
        return 0;
    } else {
        if (Fullname.value.length <= 4) {
            e.preventDefault();
            valid = false;
            alert("Fullname must have atleast 5 characters");
            return 0;
        }
    }

    if (Password.value === "") {
        e.preventDefault();
        valid = false;
        alert("You need to fill Password");
        return 0;
    } else {
        // if(!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,10}$/)){alert("Please enter strong Password");}
        if (Password.value.length <= 4) {
            e.preventDefault();
            valid = false;
            alert("Password must have atleast 5 characters");
            return 0;
        } else {
            if (Confirm_Password.value != Password.value) {
                e.preventDefault();
                valid = false;
                alert("Password Not Match With Confirm_Password");
                return 0;
            }
        }
    }

    if (Phone_No.value === "") {
        e.preventDefault();
        valid = false;
        alert("You need to fill Phone_No");
        return 0;
    } else {
        if (Phone_No.value.length != 10) {
            e.preventDefault();
            valid = false;
            alert("Phone_No must have 10 characters");
            return 0;
        } else {
            if (!Phone_No.value.match(/^\d{10}$/)) {
                e.preventDefault();
                valid = false;
                alert("Enter valid Phone_No");
                return 0;
            }
        }
    }

    if (Email.value === "") {
        e.preventDefault();
        valid = false;
        alert("You need to fill Email");
        return 0;
    } else {
        const domain = Email.value.split("@");
        if (!Email.value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
            valid = false;
            e.preventDefault();
            alert("Enter valid Email");
            return 0;
        }

        if (domain[1] != "charusat.edu.in") {
            e.preventDefault();
            valid = false;
            alert("You Not Allow To Sign_up");
            return 0;
        }
    }

    if (State.value === "") {
        e.preventDefault();
        valid = false;
        alert("You need to Select Your State");
        return 0;
    }

    if (!Gender[0].checked && !Gender[1].checked) {
        e.preventDefault();
        valid = false;
        alert("You need to Select Your Gender");
        return 0;
    }

    if (!Agreement.checked) {
        e.preventDefault();
        valid = false;
        alert("You need to Select Your Agreement");
        return 0;
    }

    if (valid) {
        //redirect to login
    }
});