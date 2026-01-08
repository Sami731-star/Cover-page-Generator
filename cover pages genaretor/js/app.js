document.getElementById("coverForm").addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("outTitle").innerText =
        document.getElementById("title").value;

    document.getElementById("outName").innerText =
        "Student Name: " + document.getElementById("name").value;

    document.getElementById("outCourse").innerText =
        "Course: " + document.getElementById("course").value;

    document.getElementById("outInstitution").innerText =
        "Institution: " + document.getElementById("institution").value;

    const dateValue = document.getElementById("date").value;
    document.getElementById("outDate").innerText =
        dateValue ? "Submission Date: " + dateValue : "";

    document.querySelector(".preview-card").style.display = "block";
});
