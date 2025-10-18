import React from "react";
import { FaDownload } from "react-icons/fa";

function ResumeData() {
  // ✅ Sample Resume Data
  const resumes = [
    {
      id: 1,
      name: "Ravi Tharun",
      role: "Frontend Developer",
      location: "Bangalore, India",
      email: "tharunravi672@gmail.com",
      phone: "7396994383",
      github: "https://github.com/ravitharun",
      linkedin: "https://linkedin.com/in/ravitharun",
      personalWebsite: "https://protifilo.com",
      education: "B.Tech in CSE, XYZ College, Bangalore",
      skills: "React.js, JavaScript, Tailwind CSS, HTML, CSS",
      projects: "Portfolio Website, Movie Finder App, Music Player",
      achievements: "Winner of Hackathon 2023, Certified React Developer",
    },
    {
      id: 2,
      name: "Pranav Kumar",
      role: "UI/UX Designer",
      location: "Hyderabad, India",
      email: "pranav.kumar@example.com",
      phone: "9876543210",
      github: "https://github.com/pranavkumar",
      linkedin: "https://linkedin.com/in/pranavkumar",
      personalWebsite: "https://pranavportfolio.com",
      education: "B.Des in UX Design, ABC University, Hyderabad",
      skills: "Figma, Adobe XD, Photoshop, User Research, Prototyping",
      projects: "E-commerce App Design, LMS Website, Portfolio Redesign",
      achievements: "Best Designer Award 2022, Certified UX Designer",
    },
  ];
  const Download = (Resume) => {
    console.log(`the file is downlading soon.. file Name ${Resume.role}.pdf`);
  };
  return (
    <div className="p-6 space-y-6">
      {resumes.map((resume) => (
        <div
          key={resume.id}
          className="border rounded-xl p-4 shadow-md hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-bold text-indigo-600">{resume.name}</h2>
          <h3 className="text-lg font-semibold text-gray-700">{resume.role}</h3>
          <p className="text-gray-600">{resume.location}</p>

          <div className="mt-2 text-gray-700 space-y-1">
            <p>
              <strong>Email:</strong> {resume.email}
            </p>
            <p>
              <strong>Phone:</strong> {resume.phone}
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href={resume.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {resume.github}
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href={resume.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {resume.linkedin}
              </a>
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={resume.personalWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {resume.personalWebsite}
              </a>
            </p>
          </div>

          <hr className="my-3 border-gray-300" />

          <div className="space-y-2">
            <p>
              <strong>Education:</strong> {resume.education}
            </p>
            <p>
              <strong>Skills:</strong> {resume.skills}
            </p>
            <p>
              <strong>Projects:</strong> {resume.projects}
            </p>
            <p>
              <strong>Achievements:</strong> {resume.achievements}
            </p>
          </div>
          <br />
          <button
            onClick={() => Download(resume)}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition transform hover:scale-105"
          >
            <FaDownload /> Download
          </button>
        </div>
      ))}
    </div>
  );
}

export default ResumeData;
