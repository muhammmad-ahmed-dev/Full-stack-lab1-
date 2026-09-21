

console.log("%c=======================================================", "color: #0d6efd; font-weight: bold;");
console.log("%c[Lab 03 Part J] Hoisting Demonstration Started", "color: #0d6efd; font-weight: bold;");
console.log("%c=======================================================", "color: #0d6efd; font-weight: bold;");


console.log("1. Demonstrating 'var' hoisting:");
console.log("   Value of 'demoVar' BEFORE declaration:", demoVar); 
var demoVar = "I am a declared and initialized var variable.";
console.log("   Value of 'demoVar' AFTER declaration:", demoVar);

console.log("\n2. Demonstrating 'let' hoisting and Temporal Dead Zone (TDZ):");
let tdzErrorMessage = "";
try {
  
    console.log("   Attempting to access 'demoLet' BEFORE declaration:", demoLet);
} catch (error) {
    tdzErrorMessage = `${error.name}: ${error.message}`;
    console.error("   Caught Expected TDZ Error:", tdzErrorMessage);
    console.log("   Explanation: Variables declared with 'let' are hoisted but not initialized. They cannot be accessed during their Temporal Dead Zone.");
}
let demoLet = "I am a declared and initialized let variable.";
console.log("   Value of 'demoLet' AFTER declaration:", demoLet);
console.log("%c=======================================================\n", "color: #0d6efd; font-weight: bold;");




const studentScenarios = {
    scenario1: {
        id: "scenario1",
        title: "Scenario 1: High Performing Student",
        description: "High CGPA, outstanding attendance, and excellent marks. Qualifies for Grade A, Gold Scholarship, and Good Standing.",
        name: "Muhammad Ahmed",
        registrationNumber: "FA23-BCS-042",
        degreeProgram: "BS Computer Science",
        semester: 4,
        cgpa: 3.92,
        attendancePercentage: 95, 
        marks: {
            assignment: 19,
            midterm: 28,   
            finalExam: 48  
        },
        maxMarks: {
            assignment: 20,
            midterm: 30,
            finalExam: 50
        },
        hasDisciplinaryRecord: false
    },

    scenario2: {
        id: "scenario2",
        title: "Scenario 2: Average Student",
        description: "Moderate academic performance with steady attendance. Demonstrates Grade B, Silver Scholarship, and Good Standing.",
        name: "Sara Fatima",
        registrationNumber: "FA23-BCS-118",
        degreeProgram: "BS Computer Science",
        semester: 4,
        cgpa: 3.45,
        attendancePercentage: 84,
        marks: {
            assignment: 15, 
            midterm: 22,    
            finalExam: 36   
        },
        maxMarks: {
            assignment: 20,
            midterm: 30,
            finalExam: 50
        },
        hasDisciplinaryRecord: false
    },

    scenario3: {
        id: "scenario3",
        title: "Scenario 3: Low Attendance Student",
        description: "High exam marks but low attendance (68%). Demonstrates that logical AND (&&) strictly prevents scholarship eligibility.",
        name: "Hamza Tariq",
        registrationNumber: "FA23-BCS-089",
        degreeProgram: "BS Computer Science",
        semester: 4,
        cgpa: 3.65,
        attendancePercentage: 68, 
        marks: {
            assignment: 18, 
            midterm: 26,    
            finalExam: 42   
        },
        maxMarks: {
            assignment: 20,
            midterm: 30,
            finalExam: 50
        },
        hasDisciplinaryRecord: false
    },

    scenario4: {
        id: "scenario4",
        title: "Scenario 4: Poor Academic Performance",
        description: "Low exam scores, critical CGPA, and low attendance. Triggers Grade F, Failed status, Critical Academic Status, and No Scholarship.",
        name: "Bilal Hassan",
        registrationNumber: "FA23-BCS-204",
        degreeProgram: "BS Computer Science",
        semester: 4,
        cgpa: 1.82,
        attendancePercentage: 54, 
        marks: {
            assignment: 8,  
            midterm: 11,    
            finalExam: 20   
        },
        maxMarks: {
            assignment: 20,
            midterm: 30,
            finalExam: 50
        },
        hasDisciplinaryRecord: true
    }
};


let currentStudent = studentScenarios.scenario1;


function calculateAcademicPerformance(student) {
    
    const totalObtainedMarks = student.marks.assignment + student.marks.midterm + student.marks.finalExam;
    const totalMaxMarks = student.maxMarks.assignment + student.maxMarks.midterm + student.maxMarks.finalExam;

  
    const percentage = Number(((totalObtainedMarks / totalMaxMarks) * 100).toFixed(2));

  
    const marksLostFromFullScore = totalMaxMarks - totalObtainedMarks;

    
    const isEvenSemester = (student.semester % 2) === 0;

    return {
        totalObtainedMarks,
        totalMaxMarks,
        percentage,
        marksLostFromFullScore,
        isEvenSemester
    };
}


function calculateGrade(percentage) {
    let grade = "";
    let remarks = "";
    if (percentage >= 80) {
        grade = "A";
        remarks = "Excellent Academic Achievement";
    } else if (percentage >= 70) {
        grade = "B";
        remarks = "Very Good Academic Performance";
    } else if (percentage >= 60) {
        grade = "C";
        remarks = "Satisfactory Performance";
    } else if (percentage >= 50) {
        grade = "D";
        remarks = "Minimum Passing Standard";
    } else {
        grade = "F";
        remarks = "Unsatisfactory / Course Failed";
    }

    return { grade, remarks };
}


function determinePassFailStatus(percentage) {
    
    if (percentage >= 50) {
        return {
            status: "Passed",
            isPassing: true,
            badgeClass: "badge-status-pass"
        };
    } else {
        return {
            status: "Failed",
            isPassing: false,
            badgeClass: "badge-status-fail"
        };
    }
}


function evaluateScholarshipEligibility(student, percentage) {
    const cgpa = student.cgpa;
    const attendance = student.attendancePercentage;
    const hasViolations = student.hasDisciplinaryRecord;

    let scholarshipStatus = "";
    let reason = "";
    let tierClass = "";

   
    if (cgpa >= 3.75 && attendance >= 90 && percentage >= 85 && !hasViolations) {
        scholarshipStatus = "Gold Scholarship";
        reason = "100% Tuition Waiver - Exceptional academic merit, >90% attendance, and clean record.";
        tierClass = "badge-scholarship-gold";
    }
    
    else if (cgpa >= 3.40 && attendance >= 80 && percentage >= 75 && !hasViolations) {
        scholarshipStatus = "Silver Scholarship";
        reason = "50% Tuition Waiver - Commendable academic standing and consistent attendance.";
        tierClass = "badge-scholarship-silver";
    }
    
    else if (cgpa >= 3.00 && attendance >= 75 && percentage >= 65 && !hasViolations) {
        scholarshipStatus = "Bronze Scholarship";
        reason = "25% Tuition Waiver - Good academic progress meeting core scholarship benchmarks.";
        tierClass = "badge-scholarship-bronze";
    }
  
    else {
        scholarshipStatus = "Not Eligible";
        tierClass = "badge-scholarship-none";

       
        if (hasViolations) {
            reason = "Ineligible due to active university disciplinary record.";
        } else if (attendance < 75) {
            reason = `Ineligible due to low attendance (${attendance}% < required 75%).`;
        } else if (cgpa < 3.00 || percentage < 65) {
            reason = "Ineligible: Academic percentage or CGPA below required threshold.";
        } else {
            reason = "Did not meet cumulative merit criteria for current semester.";
        }
    }

    return {
        scholarshipStatus,
        reason,
        tierClass
    };
}


function evaluateAcademicStatus(student, percentage) {
    const cgpa = student.cgpa;
    const attendance = student.attendancePercentage;

    let academicStatus = "";
    let description = "";
    let alertClass = "";

   
    const isCritical = (cgpa < 2.00) || (percentage < 50) || (attendance < 60);


    const isWarning = ((cgpa < 2.50) || (attendance < 75) || (percentage < 60)) && !isCritical;

    if (isCritical) {
        academicStatus = "Critical";
        description = "Urgent Intervention Required: Immediate meeting with academic advisor needed.";
        alertClass = "badge-warning-critical";
    } else if (isWarning) {
        academicStatus = "Academic Warning";
        description = "Student placed on official warning due to sub-standard metrics.";
        alertClass = "badge-warning-alert";
    } else {
        academicStatus = "Good Standing";
        description = "Student is in positive academic standing with no administrative concerns.";
        alertClass = "badge-warning-good";
    }

    return {
        academicStatus,
        description,
        alertClass
    };
}

function demonstrateOperators(student, calculations, gradeInfo, passFail, scholarship, academicStatus) {
    return {
        arithmetic: [
            { op: "+", expr: `${student.marks.assignment} + ${student.marks.midterm} + ${student.marks.finalExam}`, result: `${calculations.totalObtainedMarks} Marks (Total Obtained)` },
            { op: "-", expr: `${calculations.totalMaxMarks} - ${calculations.totalObtainedMarks}`, result: `${calculations.marksLostFromFullScore} Marks (Short of 100)` },
            { op: "*", expr: `(${calculations.totalObtainedMarks} / ${calculations.totalMaxMarks}) * 100`, result: `${calculations.percentage}% (Percentage)` },
            { op: "/", expr: `${calculations.totalObtainedMarks} / ${calculations.totalMaxMarks}`, result: `${(calculations.totalObtainedMarks / calculations.totalMaxMarks).toFixed(4)} (Fractional Score)` },
            { op: "%", expr: `Semester ${student.semester} % 2`, result: `${student.semester % 2} (${calculations.isEvenSemester ? "Even Term" : "Odd Term"})` }
        ],
        comparison: [
            { op: ">=", expr: `Percentage (${calculations.percentage}) >= 50`, result: String(calculations.percentage >= 50) },
            { op: "<", expr: `Attendance (${student.attendancePercentage}) < 75`, result: String(student.attendancePercentage < 75) },
            { op: ">", expr: `CGPA (${student.cgpa}) > 3.50`, result: String(student.cgpa > 3.50) },
            { op: "<=", expr: `Final Exam (${student.marks.finalExam}) <= 50`, result: String(student.marks.finalExam <= 50) },
            { op: "===", expr: `Grade === "A"`, result: String(gradeInfo.grade === "A") },
            { op: "!==", expr: `hasDisciplinaryRecord !== true`, result: String(student.hasDisciplinaryRecord !== true) }
        ],
        logical: [
            { op: "&&", expr: `CGPA >= 3.75 && Attendance >= 90 && Percentage >= 85`, result: String(student.cgpa >= 3.75 && student.attendancePercentage >= 90 && calculations.percentage >= 85) },
            { op: "||", expr: `CGPA < 2.0 || Percentage < 50 || Attendance < 60`, result: String(student.cgpa < 2.0 || calculations.percentage < 50 || student.attendancePercentage < 60) },
            { op: "!", expr: `!student.hasDisciplinaryRecord`, result: String(!student.hasDisciplinaryRecord) }
        ]
    };
}



function renderStudentSystem(student) {
    
    const calculations = calculateAcademicPerformance(student);
    const gradeInfo = calculateGrade(calculations.percentage);
    const passFail = determinePassFailStatus(calculations.percentage);
    const scholarship = evaluateScholarshipEligibility(student, calculations.percentage);
    const warning = evaluateAcademicStatus(student, calculations.percentage);
    const operatorLog = demonstrateOperators(student, calculations, gradeInfo, passFail, scholarship, warning);

   
    const profileContainer = document.getElementById("student-profile-display");
    if (profileContainer) {
        profileContainer.innerHTML = `
            <div class="profile-meta-grid">
                <div class="meta-item">
                    <span class="meta-label">Student Name:</span>
                    <strong class="meta-value">${student.name}</strong>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Registration No:</span>
                    <strong class="meta-value">${student.registrationNumber}</strong>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Degree Program:</span>
                    <strong class="meta-value">${student.degreeProgram}</strong>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Semester:</span>
                    <strong class="meta-value">Semester ${student.semester} (${calculations.isEvenSemester ? "Spring / Even" : "Fall / Odd"})</strong>
                </div>
                <div class="meta-item">
                    <span class="meta-label">CGPA:</span>
                    <strong class="meta-value text-primary">${student.cgpa.toFixed(2)} / 4.00</strong>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Attendance:</span>
                    <strong class="meta-value ${student.attendancePercentage >= 75 ? 'text-success' : 'text-danger'}">
                        ${student.attendancePercentage}% ${student.attendancePercentage < 75 ? '⚠️ Below 75%' : '✅ Satisfied'}
                    </strong>
                </div>
            </div>
        `;
    }

  
    const marksContainer = document.getElementById("marks-breakdown-display");
    if (marksContainer) {
        marksContainer.innerHTML = `
            <div class="table-responsive">
                <table class="table table-bordered table-hover align-middle mb-0">
                    <thead class="table-light">
                        <tr>
                            <th>Assessment Component</th>
                            <th class="text-center">Max Marks</th>
                            <th class="text-center">Obtained Marks</th>
                            <th class="text-center">Weightage Ratio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><i class="bi bi-file-earmark-text"></i> Assignment Marks</td>
                            <td class="text-center">${student.maxMarks.assignment}</td>
                            <td class="text-center fw-bold">${student.marks.assignment}</td>
                            <td class="text-center">${((student.marks.assignment / student.maxMarks.assignment) * 100).toFixed(1)}%</td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-journal-check"></i> Midterm Examination</td>
                            <td class="text-center">${student.maxMarks.midterm}</td>
                            <td class="text-center fw-bold">${student.marks.midterm}</td>
                            <td class="text-center">${((student.marks.midterm / student.maxMarks.midterm) * 100).toFixed(1)}%</td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-award"></i> Final Examination</td>
                            <td class="text-center">${student.maxMarks.finalExam}</td>
                            <td class="text-center fw-bold">${student.marks.finalExam}</td>
                            <td class="text-center">${((student.marks.finalExam / student.maxMarks.finalExam) * 100).toFixed(1)}%</td>
                        </tr>
                    </tbody>
                    <tfoot class="table-light fw-bold">
                        <tr>
                            <td>Total Marks Computed</td>
                            <td class="text-center">${calculations.totalMaxMarks}</td>
                            <td class="text-center text-primary fs-5">${calculations.totalObtainedMarks}</td>
                            <td class="text-center fs-5 text-primary">${calculations.percentage}%</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        `;
    }

    
    const statusContainer = document.getElementById("decisions-summary-display");
    if (statusContainer) {
        statusContainer.innerHTML = `
            <div class="row g-3">
                <div class="col-sm-6 col-lg-3">
                    <div class="decision-card">
                        <span class="decision-label">Calculated Grade</span>
                        <div class="decision-value grade-badge ${gradeInfo.grade === 'A' ? 'grade-a' : gradeInfo.grade === 'B' ? 'grade-b' : gradeInfo.grade === 'C' ? 'grade-c' : gradeInfo.grade === 'D' ? 'grade-d' : 'grade-f'}">
                            Grade ${gradeInfo.grade}
                        </div>
                        <small class="decision-sub">${gradeInfo.remarks}</small>
                    </div>
                </div>

                <div class="col-sm-6 col-lg-3">
                    <div class="decision-card">
                        <span class="decision-label">Pass / Fail Status</span>
                        <div class="decision-value ${passFail.badgeClass}">
                            ${passFail.status}
                        </div>
                        <small class="decision-sub">${passFail.isPassing ? 'Cleared passing benchmark (>= 50%)' : 'Failed minimum benchmark (< 50%)'}</small>
                    </div>
                </div>

                <div class="col-sm-6 col-lg-3">
                    <div class="decision-card">
                        <span class="decision-label">Scholarship Status</span>
                        <div class="decision-value ${scholarship.tierClass}">
                            ${scholarship.scholarshipStatus}
                        </div>
                        <small class="decision-sub">${scholarship.reason}</small>
                    </div>
                </div>

                <div class="col-sm-6 col-lg-3">
                    <div class="decision-card">
                        <span class="decision-label">Academic Status</span>
                        <div class="decision-value ${warning.alertClass}">
                            ${warning.academicStatus}
                        </div>
                        <small class="decision-sub">${warning.description}</small>
                    </div>
                </div>
            </div>
        `;
    }

 
    const reportContainer = document.getElementById("formatted-report-output");
    if (reportContainer) {
        const reportText = `================================================
          STUDENT ACADEMIC REPORT
================================================
Student Name        : ${student.name}
Registration No     : ${student.registrationNumber}
Degree Program      : ${student.degreeProgram}
Semester            : ${student.semester} (${calculations.isEvenSemester ? 'Even' : 'Odd'})

CGPA                : ${student.cgpa.toFixed(2)} / 4.00
Attendance          : ${student.attendancePercentage}%

Assignment Marks    : ${student.marks.assignment} / ${student.maxMarks.assignment}
Midterm Marks       : ${student.marks.midterm} / ${student.maxMarks.midterm}
Final Exam Marks    : ${student.marks.finalExam} / ${student.maxMarks.finalExam}
------------------------------------------------
Total Marks         : ${calculations.totalObtainedMarks} / ${calculations.totalMaxMarks}
Percentage          : ${calculations.percentage}%
Grade               : ${gradeInfo.grade} (${gradeInfo.remarks})
Pass/Fail Status    : ${passFail.status}
------------------------------------------------
Academic Status     : ${warning.academicStatus}
Scholarship Status  : ${scholarship.scholarshipStatus}
Eligibility Note    : ${scholarship.reason}
================================================`;

        reportContainer.textContent = reportText;
    }

   
    const operatorsContainer = document.getElementById("operators-demo-display");
    if (operatorsContainer) {
        let opHtml = `
            <div class="row g-3">
                <div class="col-md-4">
                    <div class="operator-block">
                        <h6 class="text-primary fw-bold mb-2"><i class="bi bi-calculator"></i> Arithmetic (+, -, *, /, %)</h6>
                        <ul class="list-unstyled mb-0">
                            ${operatorLog.arithmetic.map(item => `
                                <li><code>${item.expr}</code> = <strong>${item.result}</strong></li>
                            `).join("")}
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="operator-block">
                        <h6 class="text-success fw-bold mb-2"><i class="bi bi-toggles"></i> Comparison (&gt;, &lt;, &gt;=, &lt;=, ===, !==)</h6>
                        <ul class="list-unstyled mb-0">
                            ${operatorLog.comparison.map(item => `
                                <li><code>${item.expr}</code> &rarr; <span class="badge ${item.result === 'true' ? 'bg-success' : 'bg-secondary'}">${item.result}</span></li>
                            `).join("")}
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="operator-block">
                        <h6 class="text-danger fw-bold mb-2"><i class="bi bi-diagram-3"></i> Logical (&amp;&amp;, ||, !)</h6>
                        <ul class="list-unstyled mb-0">
                            ${operatorLog.logical.map(item => `
                                <li><code>${item.expr}</code> &rarr; <span class="badge ${item.result === 'true' ? 'bg-primary' : 'bg-dark'}">${item.result}</span></li>
                            `).join("")}
                        </ul>
                    </div>
                </div>
            </div>
        `;
        operatorsContainer.innerHTML = opHtml;
    }


    const hoistingContainer = document.getElementById("hoisting-demo-display");
    if (hoistingContainer) {
        hoistingContainer.innerHTML = `
            <div class="hoisting-box">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="badge bg-secondary">Browser Console Output Preview</span>
                    <small class="text-muted">Open DevTools (F12) to inspect real execution</small>
                </div>
                <pre class="mb-0"><code>// 1. var hoisting result:
Accessing 'demoVar' before declaration: <span class="text-warning">undefined</span> (Hoisted & initialized with undefined)
Accessing 'demoVar' after declaration : <span class="text-info">"I am a declared and initialized var variable."</span>

// 2. let hoisting result:
Accessing 'demoLet' before declaration: <span class="text-danger">${tdzErrorMessage}</span>
Explanation: 'let' is in the Temporal Dead Zone (TDZ).
Accessing 'demoLet' after declaration : <span class="text-info">"I am a declared and initialized let variable."</span></code></pre>
            </div>
        `;
    }


    console.log(`%c[Student Academic Report Generated for: ${student.name} (${student.registrationNumber})]`, "color: #198754; font-weight: bold;");
    console.table({
        "Student Name": student.name,
        "Registration No": student.registrationNumber,
        "Degree Program": student.degreeProgram,
        "CGPA": student.cgpa,
        "Attendance": `${student.attendancePercentage}%`,
        "Total Marks": `${calculations.totalObtainedMarks} / ${calculations.totalMaxMarks}`,
        "Percentage": `${calculations.percentage}%`,
        "Grade": gradeInfo.grade,
        "Pass/Fail": passFail.status,
        "Scholarship": scholarship.scholarshipStatus,
        "Academic Status": warning.academicStatus
    });
}



function setupScenarioSwitchers() {
    const buttons = document.querySelectorAll(".scenario-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", function() {
          
            buttons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            const scenarioKey = this.getAttribute("data-scenario");
            if (studentScenarios[scenarioKey]) {
                currentStudent = studentScenarios[scenarioKey];
                
           
                const descElement = document.getElementById("scenario-description");
                if (descElement) {
                    descElement.innerHTML = `<strong>${currentStudent.title}:</strong> ${currentStudent.description}`;
                }

               
                renderStudentSystem(currentStudent);
            }
        });
    });
}


document.addEventListener("DOMContentLoaded", () => {

    setupScenarioSwitchers();

  
    renderStudentSystem(currentStudent);
});
