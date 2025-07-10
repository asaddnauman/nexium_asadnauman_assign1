"use client";

import React, { useState } from "react";
import quotes from "@/data/quotes.json";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Quote {
  topic: string;
  quote: string;
  author: string;
}

export default function QuoteGenerator() {
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState<Quote[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const corrected = topic.trim().toLowerCase().replace("sucess", "success");
    const matched = quotes.filter((q) =>
      q.topic.toLowerCase().includes(corrected)
    );
    setResults(matched.slice(0, 3));
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative text-white"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Header at top-left */}
      <h1 className="absolute top-6 left-6 text-[48px] font-[Gabriola] drop-shadow-lg">
        Quote Generator
      </h1>

      {/* Centered Search Box */}
      <div className="w-full h-full flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-6 bg-white bg-opacity-80 p-10 rounded-xl shadow-xl w-full max-w-3xl"
        >
          <p className="text-[40px] font-semibold text-black">Enter a topic:</p>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Motivation"
            className="w-full text-black px-6 py-4 text-[50px] rounded-lg border border-gray-300"
          />
          <button
            type="submit"
            className="text-[50px] px-12 py-4 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Search
          </button>

          {/* Results */}
          <div className="w-full space-y-4 mt-6">
            {results.length > 0
              ? results.map((quote, i) => (
                  <div
                    key={i}
                    className="bg-white bg-opacity-90 text-black p-6 rounded-lg"
                  >
                    <h3 className="text-2xl font-bold">{quote.topic}</h3>
                    <p className="italic mt-2 text-xl">"{quote.quote}"</p>
                    <p className="text-right text-sm mt-2">— {quote.author}</p>
                  </div>
                ))
              : topic && (
                  <p className="text-red-600 text-2xl">
                    No quotes found for "{topic}"
                  </p>
                )}
          </div>
        </form>
      </div>
    </div>
  );
}
