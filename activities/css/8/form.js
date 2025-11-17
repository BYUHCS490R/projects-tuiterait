    document.getElementById("myForm").addEventListener('submit',function(event) {
        event.preventDefault();
        alert("Form Submitted")
    

    const fullname = document.getElementById('firstNameInput').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const birthdate = document.getElementById('birthdate').value;
    const genderElement = document.querySelector('input[name="gender"]:checked');
    const gender = genderElement ? genderElement.value : "";
    const state = document.getElementById('state').value;

    if (!fullname || !email) {
        alert("You need a name and email.")

    }

    if (!birthdate || !gender) {
        alert("You need to fill up birthdate and gender.");
        return;

    }


    if (!state) {
        alert("You need to chose a State.");
        return;
    }

    const formData = {
        name: fullname,
        email: email,
        password: password,
        state : state,
        gender: gender, 
        birthdate: birthdate
    };

    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Form submitted successfully!");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            document.getElementById('myForm').reset();
            document.getElementById('myForm').innerHTML = "";
            document.getElementById('message').innerText = response.message;
        } else if (xhr.readyState === 4) {
            alert ("Error submitting form.");
        }
        };
        xhr.send(JSON.stringify(formData));
    

    });
    
