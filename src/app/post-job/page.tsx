"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function PostJob() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    description: "",
    fullDescription: "",
    location: "",
    salary: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form
      setFormData({
        title: "",
        company: "",
        description: "",
        fullDescription: "",
        location: "",
        salary: "",
      });

      // Redirect after 2 seconds
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => router.push("/")}
        className="text-blue-600 mb-6 flex items-center"
      >
        <span className="mr-2">←</span> Back to Job Listings
      </button>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Post a New Job</h1>

        {submitSuccess ? (
          <div className="bg-green-100 p-4 rounded-lg text-green-700 mb-6">
            Job posted successfully! Redirecting to home page...
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="title"
              >
                Job Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="company"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="description"
              >
                Short Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="fullDescription"
              >
                Full Description
              </label>
              <textarea
                id="fullDescription"
                name="fullDescription"
                value={formData.fullDescription}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="location"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="salary"
              >
                Salary Range
              </label>
              <input
                type="text"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="e.g. $50,000 - $70,000"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Post Job"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
