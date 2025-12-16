const form = document.getElementById("myform");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (e){
    e.preventDefault();

    let isValid = true;

    // Name validation
    if(nameInput.value.trim() === ""){
        document.getElementById("nameError").innerText =" Name is required";
        isValid=false;
    }else{
        document.getElementById("nameError").innerText = "";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        document.getElementById("emailError").innerText = "Invalid email";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    if (passwordInput.value.length < 6) {
        document.getElementById("passwordError").innerText ="Password must be at least 6 characters";
        isValid = false;
    } else {
        document.getElementById("passwordError").innerText = "";
    }

    if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});