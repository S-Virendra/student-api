const baseUrl = "/api/students";

// ✅ Fetch and display all students
async function loadStudents() {
    const res = await fetch(baseUrl);
    const students = await res.json();

    const tbody = document.getElementById("studentTableBody");
    tbody.innerHTML = "";

    students.forEach(s => {
        const row = `<tr>
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td>${s.marks}</td>
            <td>${s.course}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

// ✅ Add new student
document.getElementById("studentForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        marks: parseInt(document.getElementById("marks").value),
        course: document.getElementById("course").value
    };

    await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
    });

    e.target.reset();
    loadStudents();
});

loadStudents();
