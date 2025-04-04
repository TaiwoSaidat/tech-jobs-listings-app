import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 text-white py-4 text-center">
        <div className="container mx-auto">
          <p>
            &copy;{new Date().getFullYear()}.{" "}
            <Link
              href="https://github.com/TaiwoSaidat/tech-jobs-listings-app"
              className="hover:bg-gray-300 rounded-2xl"
            >
              Tech Job Posts.&nbsp;
            </Link>
            All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
