import React from "react";
import Link from "next/link";
import { Job } from "../data/jobs";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <>
      <div>
        <Link href={`/job/${job.id}`}>
        <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow cursor-pointer">
          <h2 className="text-2xl font-medium ">{job.title}</h2>
          <p className="text-gray-500 text-md ">{job.company}</p>
          <p className="mt-2 text-gray-400">{job.description}</p>
          <div className="mt-3 flex justify-between items-center">
            <p className="text-sm text-gray-400">{job.location}</p>
            <p className="text-sm text-gray-400">
              Posted on: {new Date(job.postedDate).toLocaleDateString()}
            </p>
          </div>
        </div>
        </Link>
      </div>
    </>
  );
};

export default JobCard;
