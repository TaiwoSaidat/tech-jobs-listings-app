"use client";

import React, { useState } from "react";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import { jobs } from "../data/jobs";

const ITEMS_PER_PAGE = 5;

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleJobs, setVisibleJobs] = useState(ITEMS_PER_PAGE);

  const filteredJobs = jobs.filter(
    (job: any) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLoadMore = () => {
    setVisibleJobs((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <main className="container mx-auto px-4 py-8  ">
      <h1 className="text-3xl font-bold mb-8 text-center">Job Listings</h1>

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="mb-8">
        {filteredJobs.slice(0, visibleJobs).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {visibleJobs < filteredJobs.length && (
        <div className="flex justify-center">
          <button
            onClick={handleLoadMore}
            className=" px-8 py-2 rounded-4xl bg-zinc-700 hover:bg-gray-600 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </main>
  );
}

