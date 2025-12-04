document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const ageValue = document.getElementById("age").value;
    const age = parseInt(ageValue, 10);
    const password = document.getElementById("password").value;
    const ssn = document.getElementById("ssn").value.trim();

    if (!name || !email || !ssn) {
        alert("Please fill out your full name, email, and SSN.");
        return;
    }

    if (isNaN(age) || age < 13 || age > 99) {
        alert("Age must be between 13 and 99.");
        return;
    }

    const formData = {
        name: name,
        email: email,
        age: age,
        password: password,
        ssn: ssn
    };

    console.log("Valorant enlist form submitted:", formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let messageText = "Form submitted!";
            try {
                const response = JSON.parse(xhr.responseText);
                if (response.message) {
                    messageText = response.message;
                }
            } catch (e) {
            }

            document.getElementById("message").innerText = messageText;

            document.getElementById("myForm").innerHTML =
                "<p>Form submitted! Welcome to the Valorant army.</p>";
        }
    };

    xhr.send();
});
