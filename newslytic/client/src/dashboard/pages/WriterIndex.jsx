import React from "react";

const WriterIndex = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-100 to-blue-100">
      <div className="bg-white shadow-lg rounded-lg p-10 text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Welcome, Writer!</h1>
        <p className="text-lg text-gray-600 mb-6">
          Here you can create, edit, and manage your news articles.
        </p>
        <div className="flex flex-col gap-3">
          <span className="text-green-500 font-semibold">Writer Dashboard Features:</span>
          <ul className="list-disc list-inside text-left text-gray-700">
            <li>Create new news articles</li>
            <li>Edit or update your existing articles</li>
            <li>View your published and pending news</li>
            <li>Access the image gallery for your stories</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WriterIndex;