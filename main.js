
let button = document.getElementById("btn-submit")

button.addEventListener("click", () => {
    let fName = document.getElementById("fname").value
    let lName = document.getElementById("lname").value
    let password = document.getElementById("password").value
    let cpassword = document.getElementById("cpassword").value

    if (password !== cpassword) {
        alert("Password does not match")
    } else {
        alert("Welcome" + fName + " " + lName)
    }
})