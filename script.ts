// Import html2pdf from the library
declare var html2pdf: any;

// All output elements
let output_name = document.getElementById("output_name") as HTMLElement | null;
let output_phone = document.getElementById(
  "output_phone"
) as HTMLElement | null;
let output_email = document.getElementById(
  "output_email"
) as HTMLElement | null;
let output_education = document.getElementById(
  "output_education"
) as HTMLElement | null;
let output_institude = document.getElementById(
  "output_institude"
) as HTMLElement | null;
let output_orgnization = document.getElementById(
  "output_orgnization"
) as HTMLElement | null;
let output_work_experience = document.getElementById(
  "output_work_experience"
) as HTMLElement | null;
let output_skills = document.getElementById(
  "output_skills"
) as HTMLElement | null;
let output_languages = document.getElementById(
  "output_languages"
) as HTMLElement | null;

// Resume generation
const resume_output = document.getElementById(
  "resume_output"
) as HTMLElement | null;

document.getElementById("form")?.addEventListener("submit", generateResume);

function generateResume(e: Event) {
  e.preventDefault();
  let languages: string[] = [];

  // All input values
  let input_name = document.getElementById("name") as HTMLInputElement | null;
  let input_email = document.getElementById("email") as HTMLInputElement | null;
  let input_phone = document.getElementById("phone") as HTMLInputElement | null;
  let input_education = document.getElementById(
    "education"
  ) as HTMLSelectElement | null;
  let input_institute = document.getElementById(
    "institute"
  ) as HTMLInputElement | null;
  let input_Orgnization = document.getElementById(
    "Orgnization"
  ) as HTMLInputElement | null;
  let input_experience = document.getElementById(
    "experience"
  ) as HTMLTextAreaElement | null;
  let input_skills = document.getElementById(
    "skills"
  ) as HTMLTextAreaElement | null;
  let input_english = document.getElementById(
    "english"
  ) as HTMLInputElement | null;
  let input_urdu = document.getElementById("urdu") as HTMLInputElement | null;
  let input_sindhi = document.getElementById(
    "sindhi"
  ) as HTMLInputElement | null;

  // Ensure all elements exist before proceeding
  if (
    output_name &&
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
    input_skills
  ) {
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
    if (input_english?.checked) {
      languages.push(input_english.value);
    }
    if (input_urdu?.checked) {
      languages.push(input_urdu.value);
    }
    if (input_sindhi?.checked) {
      languages.push(input_sindhi.value);
    }

    // Append languages to output
    output_languages.innerHTML = ""; // Clear previous entries
    languages.forEach((language) => {
      let li = document.createElement("li");
      li.innerText = language;
      output_languages.appendChild(li);
    });

    // Display the resume output section
    resume_output?.style.display = "flex";

    // Display the download button
    const downloadButton = document.getElementById("pdf_div");
    if (downloadButton) {
      downloadButton.style.display = "block";
    }
  }
}

// Function to download resume as PDF
document.getElementById("download_resume")?.addEventListener("click", () => {
  const resumeElement = document.querySelector(".resume") as HTMLElement | null;
  if (resumeElement) {
    const opt = {
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
