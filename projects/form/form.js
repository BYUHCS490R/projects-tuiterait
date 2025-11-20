document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = document.getElementById("firstNameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const birthdate = document.getElementById("birthdateInput").value;
    const age = document.getElementById("ageInput").value;
    const password = document.getElementById("passInput").value;
    const genderElement = document.querySelector('input[name="gender"]:checked');
    const gender = genderElement ? genderElement.value : "";
    const state = document.getElementById("state").value;

    // ---- VALIDATION ----
    if (!fullname || !email || !birthdate) {
        alert("Please fill out name, email, and birthdate.");
        return;
    }

    if (age < 18) {
        alert("You must be at least 18 years old.");
        return;
    }

    // Collect data
    const formData = {
        name: fullname,
        email: email,
        birthdate: birthdate,
        age: age,
        password: password,
        gender: gender,
        state: state
    };

    console.log("Form submitted:", formData);

    // ---- AJAX REQUEST ----
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            // Display response message
            document.getElementById("message").innerText = response.message;

            // Disable form after success
            document.getElementById("myForm").reset();
            document.getElementById("myForm").innerHTML = "<h3>Form Submitted ✔</h3>";
        }
    };

    xhr.send();
});
