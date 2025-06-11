import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white py-8 px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="text-blue-600 text-xl font-bold mb-2 cursor-pointer">
            MORENT
          </h3>
          <p className="text-gray-600 text-sm w-[250px]">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-20 mt-4 md:mt-0">
          <div>
            <h4 className="text-gray-900 font-semibold mb-2 cursor-pointer">
              About
            </h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-2 cursor-pointer">
              Community
            </h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-2 cursor-pointer">
              Socials
            </h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <hr className="my-5" />
        <div className="flex flex-col md:flex-row justify-between text-gray-600 text-sm">
          <p>©2022 MORENT. All rights reserved</p>
          <div className="mt-2 md:mt-0 flex gap-4">
            <span>Privacy & Policy</span>
            <span>Terms & Condition</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
