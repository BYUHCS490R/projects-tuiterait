document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = document.getElementById("firstNameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const birthdate = document.getElementById("birthdateInput").value;
    const age = document.getElementById("ageInput").value;
    const password = document.getElementById("passInput").value;
    const state = document.getElementById("state").value;


    if (!fullname || !email || !birthdate) {
        alert("Please fill out name, email, and birthdate.");
        return;
    }

    if (age < 18) {
        alert("You must be at least 18 years old.");
        return;
    }


    const formData = {
        name: fullname,
        email: email,
        birthdate: birthdate,
        age: age,
        password: password,
        state: state
    };

    console.log("Form submitted:", formData);


    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);


            document.getElementById("message").innerText = response.message;


            document.getElementById("myForm").reset();
            document.getElementById("myForm").innerHTML = "Form Submitted !";
        }
    };

    xhr.send();
});
