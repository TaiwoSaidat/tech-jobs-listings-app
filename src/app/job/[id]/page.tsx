"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { jobs } from "@/src/data/jobs";

export default function JobDetail() {
  const router = useRouter();
  const { id } = useParams();

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Job not found</h1>
        <button
          onClick={() => router.push("/")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Job Listings
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => router.push("/")}
        className="text-blue-600 mb-6 flex items-center"
      >
        <span className="mr-2">←</span> Back to Job Listings
      </button>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">{job.title}</h1>
        <h2 className="text-xl text-gray-700 mb-4">{job.company}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-3 bg-gray-50 rounded">
            <span className="font-semibold">Location:</span> {job.location}
          </div>
          <div className="p-3 bg-gray-50 rounded">
            <span className="font-semibold">Salary:</span> {job.salary}
          </div>
          <div className="p-3 bg-gray-50 rounded">
            <span className="font-semibold">Posted Date:</span>{" "}
            {new Date(job.postedDate).toLocaleDateString()}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Job Description</h3>
          <p className="text-gray-700 whitespace-pre-line">
            {job.fullDescription}
          </p>
        </div>

        <div className="mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

