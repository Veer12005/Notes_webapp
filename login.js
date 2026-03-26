function login(event) {
    event.preventDefault();

    let email = document.getElementById("loginUser").value.trim();
    let password = document.getElementById("loginPass").value.trim();

    let students = JSON.parse(localStorage.getItem("students")) || [];

    let validUser = students.find(function(student) {
        return student.email === email && student.password === password;
    });

    if (validUser) {
        localStorage.setItem("loggedInUser", email);
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password!");
    }
}
