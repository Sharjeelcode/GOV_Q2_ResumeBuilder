var _a, _b;
// All output elements
var output_name = document.getElementById("output_name");
var output_phone = document.getElementById("output_phone");
var output_email = document.getElementById("output_email");
var output_education = document.getElementById("output_education");
var output_institude = document.getElementById("output_institude");
var output_orgnization = document.getElementById("output_orgnization");
var output_work_experience = document.getElementById("output_work_experience");
var output_skills = document.getElementById("output_skills");
var output_languages = document.getElementById("output_languages");
// Resume generation
var resume_output = document.getElementById("resume_output");
(_a = document.getElementById("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", generateResume);
function generateResume(e) {
    e.preventDefault();
    var languages = [];
    // All input values
    var input_name = document.getElementById("name");
    var input_email = document.getElementById("email");
    var input_phone = document.getElementById("phone");
    var input_education = document.getElementById("education");
    var input_institute = document.getElementById("institute");
    var input_Orgnization = document.getElementById("Orgnization");
    var input_experience = document.getElementById("experience");
    var input_skills = document.getElementById("skills");
    var input_english = document.getElementById("english");
    var input_urdu = document.getElementById("urdu");
    var input_sindhi = document.getElementById("sindhi");
    // Ensure all elements exist before proceeding
    if (output_name &&
        output_email &&
        output_phone &&
        output_education &&
        output_institude &&
        output_orgnization &&
        output_work_experience &&
        output_skills &&
        output_languages &&
        input_name &&
        input_email &&
        input_phone &&
        input_education &&
        input_institute &&
        input_Orgnization &&
        input_experience &&
        input_skills) {
        // Assigning values to the output elements
        output_name.innerHTML = input_name.value;
        output_email.innerHTML = input_email.value;
        output_phone.innerHTML = input_phone.value;
        output_education.innerHTML = input_education.value;
        output_institude.innerHTML = input_institute.value;
        output_orgnization.innerHTML = input_Orgnization.value;
        output_work_experience.innerHTML = input_experience.value;
        output_skills.innerHTML = input_skills.value;
        // Adding selected languages to array
        if (input_english === null || input_english === void 0 ? void 0 : input_english.checked) {
            languages.push(input_english.value);
        }
        if (input_urdu === null || input_urdu === void 0 ? void 0 : input_urdu.checked) {
            languages.push(input_urdu.value);
        }
        if (input_sindhi === null || input_sindhi === void 0 ? void 0 : input_sindhi.checked) {
            languages.push(input_sindhi.value);
        }
        // Append languages to output
        output_languages.innerHTML = ""; // Clear previous entries
        languages.forEach(function (language) {
            var li = document.createElement("li");
            li.innerText = language;
            output_languages.appendChild(li);
        });
        // Display the resume output section
        resume_output === null || resume_output === void 0 ? void 0 : resume_output.style.display = "flex";
        // Display the download button
        var downloadButton = document.getElementById("pdf_div");
        if (downloadButton) {
            downloadButton.style.display = "block";
        }
    }
}
// Function to download resume as PDF
(_b = document.getElementById("download_resume")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var resumeElement = document.querySelector(".resume");
    if (resumeElement) {
        var opt = {
            margin: 0.5,
            filename: "Resume.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };
        // Generate PDF and trigger download
        html2pdf().from(resumeElement).set(opt).save();
    }
});
