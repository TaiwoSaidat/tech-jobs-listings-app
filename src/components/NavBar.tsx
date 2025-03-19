import Link from 'next/link';
import React from 'react'

const NavBar = () => {
  return (
    <>
      <div className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Tech Job Posts
          </Link>
          <div>
            <Link
              href="/post-job"
              // href="/"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar
