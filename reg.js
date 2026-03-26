function register(event) {
    event.preventDefault();

    let email = document.getElementById("regUser").value.trim();
    let password = document.getElementById("regPass").value.trim();

    let students = JSON.parse(localStorage.getItem("students")) || [];

    let alreadyExists = students.find(function(student) {
        return student.email === email;
    });

    if (alreadyExists) {
        alert("This email is already registered!");
        return;
    }

    let studentData = {
        email: email,
        password: password
    };

    students.push(studentData);
    localStorage.setItem("students", JSON.stringify(students));

    alert("Registration successful!");
    window.location.href = "login.html";
}
