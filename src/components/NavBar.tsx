import Link from 'next/link';
import React from 'react'

const NavBar = () => {
  return (
    <>
      <div className="bg-gray-900 p-4 ">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Tech Job Posts
          </Link>
          <div>
            <Link
              href="/post-job"
              className=" px-12 py-2 rounded-lg bg-zinc-700 hover:bg-gray-600 transition-colors"
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
