import React from "react";

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white shadow-lg rounded-lg p-10 text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Welcome to Newslytic!</h1>
        <p className="text-lg text-gray-600 mb-6">
          Your one-stop portal for the latest news, updates, and insights.
        </p>
        <div className="flex flex-col gap-3">
          <span className="text-blue-500 font-semibold">What you can do here:</span>
          <ul className="list-disc list-inside text-left text-gray-700">
            <li>Read the latest news articles</li>
            <li>Search and filter news by category</li>
            <li>View featured and popular stories</li>
            <li>Explore our image gallery</li>
            <li>Sign in to contribute or manage content</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Welcome;