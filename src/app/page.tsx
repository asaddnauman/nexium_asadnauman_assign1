"use client";

import { useState } from "react";

const quotesData = {
  motivation: [
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Success doesn’t just find you. You have to go out and get it.",
  ],
  success: [
    "Success is not in what you have, but who you are.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream it. Wish it. Do it.",
  ],
  life: [
    "Life is a one-time offer, use it well.",
    "Life is short. Do stuff that matters.",
    "Difficult roads often lead to beautiful destinations.",
  ],
};

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const [category, setCategory] = useState("");
  const [displayQuotes, setDisplayQuotes] = useState<string[]>([]);

  const handleSearchClick = () => {
    const value = category.toLowerCase();

    if (quotesData[value as keyof typeof quotesData]) {
      setDisplayQuotes(quotesData[value as keyof typeof quotesData]);
    } else {
      setDisplayQuotes([]);
    }
  };

  return (
    <main
      className="relative min-h-screen bg-cover bg-center font-[Gabriola] text-white"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center px-10 pt-6">
        <h1 className="text-[72px]">Quote Generator</h1>
        <button
          className="text-[72px] underline hover:text-gray-300 transition"
          onClick={() => setShowAbout(!showAbout)}
        >
          About Me
        </button>
      </div>

      {/* Search Bar + Button */}
      <div className="flex justify-center mt-20 space-x-4">
        <input
          type="text"
          placeholder="Type 'motivation', 'success', 'life'..."
          className="w-1/2 p-4 text-black text-2xl rounded-xl"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button
          onClick={handleSearchClick}
          className="px-8 py-4 bg-black bg-opacity-70 rounded-xl text-3xl hover:bg-opacity-90 transition"
        >
          Search
        </button>
      </div>

      {/* Quotes Display */}
      <div className="flex flex-col items-center mt-10 space-y-4 text-[32px]">
        {displayQuotes.map((quote, index) => (
          <p
            key={index}
            className="bg-black bg-opacity-50 px-6 py-3 rounded-xl"
          >
            {quote}
          </p>
        ))}
      </div>

      {/* About Me Section */}
      {showAbout && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center p-10">
          <div className="bg-white text-black p-10 rounded-2xl max-w-3xl text-center text-3xl shadow-2xl">
            <h2 className="text-5xl mb-4">About Me</h2>
            <p>
              I am Asad Nauman, an Electrical Engineer passionate about Smart
              Systems, Web Development, and AI automation. This Quote Generator
              app showcases my love for creating elegant, functional digital
              experiences.
            </p>
            <button
              onClick={() => setShowAbout(false)}
              className="mt-6 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
