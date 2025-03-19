import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 text-white py-4 text-center">
        <div className="container mx-auto">
          <p>
            &copy; {new Date().getFullYear()}   
            <Link href="https://github.com/TaiwoSaidat/tech-jobs-listings-app">
              Tech Job Posts
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
