import React, { useState } from "react";
import axios from "axios"
const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: "",
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

  const handleSubmit =async (e) => {
    e.preventDefault();
    // alert("Resume saved successfully!");
    console.log(formData,'formData')
    const Response=await axios.post("",{
      formData:formData
    })
    console.log(Response.data.message)
    // Future: send data to backend here
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setShowPreview((prev) => !prev)}
            className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            {showPreview ? "Hide Preview" : "Show Preview"}
          </button>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8`}>
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

            {[
              { label: "Education", name: "education", rows: 3 },
              { label: "Skills", name: "skills", rows: 3, placeholder: "Comma separated" },
              { label: "Projects", name: "projects", rows: 3 },
              { label: "Achievements", name: "achievements", rows: 3 },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-gray-700 font-medium mb-1">
                  {field.label}
                </label>
                <textarea
                  name={field.name}
                  placeholder={field.placeholder || `Enter your ${field.label.toLowerCase()}`}
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

          {/* Right Side - Resume Preview */}
          {showPreview && (
            <div className="bg-white shadow-2xl rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                Resume Preview
              </h2>
              <div className="space-y-3 text-gray-700">
                <h1 className="text-3xl font-bold text-indigo-700">
                  {formData.name || "Your Name"}
                </h1>
                <p>{formData.email || "yourname@example.com"}</p>
                <p>{formData.phone || "Phone Number"}</p>

                <hr className="my-3" />

                {["education", "skills", "projects", "achievements"].map((section) => (
                  <div key={section}>
                    <h3 className="text-lg font-semibold text-indigo-600">
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </h3>
                    <p>
                      {formData[section] ||
                        `${section.charAt(0).toUpperCase() + section.slice(1)} details will appear here...`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
