// JavaScript function to reset the form
function resetForm() {
    document.getElementById("surveyForm").reset();
}

// JavaScript function to submit and display the form data
function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var gender = document.querySelectorAll('input[name="gender"]:checked');
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    // Check if all required fields are filled
    if (firstName && lastName && dob && country && gender.length > 0 && profession && email && mobile) {
        var genderValues = Array.from(gender).map(input => input.value);

        // Display the form data in the popup
        var popupData = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${genderValues.join(", ")}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;

        document.getElementById("popupData").innerHTML = popupData;
        document.getElementById("popup").style.display = "block";
    } else {
        alert("Please fill in all required fields.");
    }
}

// JavaScript function to close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
