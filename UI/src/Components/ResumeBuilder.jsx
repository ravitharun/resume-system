import React, { useState } from "react";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Resume saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Left Side - Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-2xl p-6 space-y-4"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Resume Details Form
          </h2>

          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Education */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Education
            </label>
            <textarea
              name="education"
              placeholder="Your education details"
              value={formData.education}
              onChange={handleChange}
              rows="3"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Skills</label>
            <textarea
              name="skills"
              placeholder="List your skills (comma separated)"
              value={formData.skills}
              onChange={handleChange}
              rows="3"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          {/* Projects */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Projects
            </label>
            <textarea
              name="projects"
              placeholder="Add your project details"
              value={formData.projects}
              onChange={handleChange}
              rows="3"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          {/* Achievements */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Achievements
            </label>
            <textarea
              name="achievements"
              placeholder="Mention your key achievements"
              value={formData.achievements}
              onChange={handleChange}
              rows="3"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Save Resume
          </button>
        </form>

        {/* Right Side - Resume Preview */}
        <div className="bg-white shadow-2xl rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Resume Preview
          </h2>
          <div className="space-y-3 text-gray-700">
            <h1 className="text-3xl font-bold text-indigo-700">{formData.name || "Your Name"}</h1>
            <p>{formData.email || "yourname@example.com"}</p>
            <p>{formData.phone || "Phone Number"}</p>

            <hr className="my-3" />

            <div>
              <h3 className="text-lg font-semibold text-indigo-600">Education</h3>
              <p>{formData.education || "Education details will appear here..."}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-indigo-600">Skills</h3>
              <p>{formData.skills || "Skills will appear here..."}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-indigo-600">Projects</h3>
              <p>{formData.projects || "Project details will appear here..."}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-indigo-600">Achievements</h3>
              <p>{formData.achievements || "Achievements will appear here..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
