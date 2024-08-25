class Subject {
    constructor(subjectName, credits, grade = "") {
        this.subjectName = subjectName;
        this.credits = credits;
        this.grade = grade;
    }
}

function gradeToGPA(grade) {
    switch (grade.toUpperCase()) {
        case "O": return 10.0;
        case "A+": return 9.0;
        case "A": return 8.0;
        case "B+": return 7.0;
        case "B": return 6.0;
        case "C": return 5.0;
        case "D": return 4.0;
        default: return 0.0;
    }
}

function calculateCGPA(subjects) {
    let totalPoints = 0.0;
    let totalCredits = 0;

    subjects.forEach(subject => {
        let gpa = gradeToGPA(subject.grade);
        totalPoints += subject.credits * gpa;
        totalCredits += subject.credits;
    });

    return totalCredits === 0 ? 0.0 : (totalPoints / totalCredits);
}

function inputGradesForSemester(semester) {
    semester.forEach(subject => {
        let grade;
        while (true) {
            grade = prompt(`Enter the grade (O, A+, A, B+, B, C, D) for ${subject.subjectName}:`).toUpperCase();
            if (["O", "A+", "A", "B+", "B", "C", "D"].includes(grade)) break;
            alert("Invalid grade entered. Please enter a valid grade (O, A+, A, B+, B, C, D).");
        }
        subject.grade = grade;
    });
}

function calculate() {
    const semester1 = [
        new Subject("Communicative English", 3),
        new Subject("Engineering Chemistry", 3),
        new Subject("Matrices and Calculus", 4),
        new Subject("Engineering Physics", 3),
        new Subject("Problem Solving and Python Programming", 3),
        new Subject("Heritage of Tamil", 1),
        new Subject("Physics and Chemistry Laboratory", 2),
        new Subject("Problem Solving and Python Programming Laboratory", 2),
        new Subject("Communicative English Laboratory", 1)
    ];

    const semester2 = [
        new Subject("Technical English", 3),
        new Subject("Engineering Mathematics II", 4),
        new Subject("Physics for Electronics Engineering", 3),
        new Subject("Environmental Science and Engineering", 3),
        new Subject("Engineering Mechanics", 4),
        new Subject("Basic Electrical and Electronics Engineering", 3),
        new Subject("Physics and Chemistry Laboratory II", 2),
        new Subject("Engineering Graphics", 2)
    ];

    const semester3 = [
        new Subject("Discrete Mathematics", 3),
        new Subject("Data Structures", 4),
        new Subject("Digital Electronics", 3),
        new Subject("Computer Organization and Architecture", 3),
        new Subject("Object Oriented Programming", 4),
        new Subject("Communication Engineering", 3),
        new Subject("Data Structures Laboratory", 2),
        new Subject("Digital Electronics Laboratory", 2)
    ];

    const semester4 = [
        new Subject("Probability and Statistics", 4),
        new Subject("Database Management Systems", 4),
        new Subject("Computer Networks", 3),
        new Subject("Operating Systems", 4),
        new Subject("Software Engineering", 3),
        new Subject("Microprocessors and Microcontrollers", 3),
        new Subject("Database Management Systems Laboratory", 2),
        new Subject("Operating Systems Laboratory", 2)
    ];

    const semester5 = [
        new Subject("Theory of Computation", 3),
        new Subject("Compiler Design", 3),
        new Subject("Computer Graphics", 3),
        new Subject("Artificial Intelligence", 4),
        new Subject("Web Technology", 3),
        new Subject("Compiler Design Laboratory", 2),
        new Subject("Web Technology Laboratory", 2),
        new Subject("Mini Project", 1)
    ];

    const semester6 = [
        new Subject("Cryptography and Network Security", 3),
        new Subject("Mobile Computing", 3),
        new Subject("Cloud Computing", 3),
        new Subject("Software Testing", 3),
        new Subject("Data Analytics", 3),
        new Subject("Cloud Computing Laboratory", 2),
        new Subject("Mobile Computing Laboratory", 2),
        new Subject("Project Work", 2)
    ];

    const semester7 = [
        new Subject("Big Data", 3),
        new Subject("Internet of Things", 3),
        new Subject("Machine Learning", 3),
        new Subject("Deep Learning", 3),
        new Subject("Big Data Laboratory", 2),
        new Subject("Internet of Things Laboratory", 2),
        new Subject("Machine Learning Laboratory", 2)
    ];

    const semester8 = [
        new Subject("Project Work", 10),
        new Subject("Technical Seminar", 1)
    ];

    const semesters = [semester1, semester2, semester3, semester4, semester5, semester6, semester7, semester8];

    const numSemesters = parseInt(document.getElementById("semesters").value);

    if (isNaN(numSemesters) || numSemesters < 1 || numSemesters > 8) {
        alert("Invalid number of semesters. Please enter a value between 1 and 8.");
        return;
    }

    let selectedSemesters = semesters.slice(0, numSemesters);

    selectedSemesters.forEach((semester, index) => {
        console.log(`\nEntering grades for Semester ${index + 1}...`);
        inputGradesForSemester(semester);
    });

    let totalCGPA = 0.0;
    let totalCredits = 0;

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    selectedSemesters.forEach((semester, index) => {
        let semesterCGPA = calculateCGPA(semester);
        let semesterCredits = semester.reduce((sum, subject) => sum + subject.credits, 0);

        totalCGPA += semesterCGPA * semesterCredits;
        totalCredits += semesterCredits;

        resultDiv.innerHTML += `<p>CGPA for Semester ${index + 1}: ${semesterCGPA.toFixed(2)}</p>`;
    });

    let finalCGPA = totalCGPA / totalCredits;
    resultDiv.innerHTML += `<h2>Total CGPA for the selected ${numSemesters} semester(s): ${finalCGPA.toFixed(2)}</h2>`;
}


