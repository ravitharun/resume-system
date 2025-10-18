import React, { useState } from "react";
import axios from "axios";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { FiGlobe } from "react-icons/fi";

const ResumeBuilder = () => {
  pdfMake.vfs = pdfFonts.vfs; // ✅ FIXED LINE
  const [formData, setFormData] = useState({
    name: "",
    Role: "",
    Location: "",
    GithubLink: "",
    PersonalLink: "",
    LinkedinLink: "",
    email: "",
    phone: "",
    education: "",
    skills: "",
    projects: "",
    achievements: "",
  });
  const [showPreview, setShowPreview] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData, "formData");
    const Response = await axios.post("", {
      formData: formData,
    });
    console.log(Response.data.message);
  };

  // ✅ PDF Generation using pdfmake
  const generatePDF = () => {
    const dd = {
      content: [
        { text: formData.name || "Your Name", style: "header" },
        { text: formData.Role || "Your Role", style: "subheader" },
        "\n",
        {
          columns: [
            {
              width: "*",
              text: [
                { text: "📍 ", bold: true },
                formData.Location || "Your Location",
                "\n",
                { text: "📧 ", bold: true },
                formData.email || "yourname@example.com",
                "\n",
                { text: "📞 ", bold: true },
                formData.phone || "Your Phone Number",
              ],
            },
            {
              width: "*",
              text: [
                { text: "💻 GitHub: ", bold: true },
                <a href={formData.GithubLink}>GitHub</a> || "github.com/",
                "\n",
                { text: "🌐 Website: ", bold: true },
                <a href={formData.PersonalLink}>Protifilo</a> ||
                  "yourwebsite.com",
                "\n",
                { text: "🔗 LinkedIn: ", bold: true },
                <a href={formData.formData.LinkedinLink}>Linkedin</a> ||
                  "linkedin.com/in/",
              ],
            },
          ],
        },
        "\n",
        { text: "Education", style: "sectionHeader" },
        { text: formData.education || "Education details here..." },
        "\n",
        { text: "Skills", style: "sectionHeader" },
        { text: formData.skills || "Skills details here..." },
        "\n",
        { text: "Projects", style: "sectionHeader" },
        { text: formData.projects || "Projects details here..." },
        "\n",
        { text: "Achievements", style: "sectionHeader" },
        { text: formData.achievements || "Achievements details here..." },
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          alignment: "center",
          color: "#4F46E5",
        },
        subheader: {
          fontSize: 16,
          bold: true,
          alignment: "center",
          color: "#6D28D9",
        },
        sectionHeader: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 4],
          color: "#4338CA",
        },
      },
      defaultStyle: {
        fontSize: 11,
        color: "#333333",
      },
    };
    console.log(dd,'dd')

    pdfMake.createPdf(dd).download(`${formData.Role || "Resume"}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="flex justify-end mb-4 gap-5">
          <button
            onClick={() => setShowPreview((prev) => !prev)}
            className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            {showPreview ? "Hide Preview" : "Show Preview"}
          </button>

          {/* Download Button */}
          <button
            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105"
            onClick={generatePDF}
          >
            <FaDownload className="text-white" />
            Download Resume
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-2xl rounded-2xl p-6 space-y-4"
          >
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Resume Details Form
            </h2>

            {/* Input Fields */}
            {[
              { label: "Full Name", name: "name", type: "text" },
              { label: "Role", name: "Role", type: "text" },
              { label: "Location", name: "Location", type: "text" },
              { label: "Github Link", name: "GithubLink", type: "url" },
              { label: "Personal Link", name: "PersonalLink", type: "url" },
              { label: "Linkedin Link", name: "LinkedinLink", type: "url" },
              { label: "Email", name: "email", type: "email" },
              { label: "Phone Number", name: "phone", type: "text" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-gray-700 font-medium mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            ))}

            {/* Textareas */}
            {[
              { label: "Education", name: "education", rows: 3 },
              {
                label: "Skills",
                name: "skills",
                rows: 3,
                placeholder: "Comma separated",
              },
              { label: "Projects", name: "projects", rows: 3 },
              { label: "Achievements", name: "achievements", rows: 3 },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-gray-700 font-medium mb-1">
                  {field.label}
                </label>
                <textarea
                  name={field.name}
                  placeholder={
                    field.placeholder ||
                    `Enter your ${field.label.toLowerCase()}`
                  }
                  value={formData[field.name]}
                  onChange={handleChange}
                  rows={field.rows}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Save Resume
            </button>
          </form>

          {/* Right Side - Preview */}
          {showPreview && (
            <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-6xl mx-auto my-6">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Resume Preview
              </h2>

              <div className="space-y-4 text-gray-700">
                {/* Name & Role */}
                <h1 className="text-3xl font-bold text-indigo-700">
                  {formData.name || "Your Name"}
                </h1>
                <h4 className="text-2xl font-semibold text-indigo-600">
                  {formData.Role.toUpperCase() || "Your Role"}
                </h4>

                {/* Contact Info */}
                <div className="flex flex-wrap items-center gap-6 mt-2 text-gray-800">
                  <FaLocationArrow />
                  <p>{formData.Location || "Your Location"}</p>

                  <a
                    href={`mailto:${formData.email}`}
                    className="flex items-center gap-1 hover:text-indigo-500"
                  >
                    <MdEmail /> {formData.email || "yourname@example.com"}
                  </a>

                  <a
                    href={`tel:${formData.phone}`}
                    className="flex items-center gap-1 hover:text-green-500"
                  >
                    <MdPhone /> {formData.phone || "Phone Number"}
                  </a>

                  <a
                    href={formData.GithubLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-gray-800"
                  >
                    <FaGithub /> {formData.GithubLink || "Github Link"}
                  </a>

                  <a
                    href={formData.PersonalLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-blue-500"
                  >
                    <FiGlobe /> {formData.PersonalLink || "Personal Link"}
                  </a>

                  <a
                    href={formData.LinkedinLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-blue-700"
                  >
                    <FaLinkedin /> {formData.LinkedinLink || "Linkedin Link"}
                  </a>
                </div>

                <hr className="my-4 border-gray-300" />

                {/* Sections */}
                {["education", "skills", "projects", "achievements"].map(
                  (section) => (
                    <div key={section} className="mb-4">
                      <h3 className="text-lg font-semibold text-indigo-600 capitalize">
                        {section}
                      </h3>
                      <p className="text-gray-700">
                        {formData[section] ||
                          `${section} details will appear here...`}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
