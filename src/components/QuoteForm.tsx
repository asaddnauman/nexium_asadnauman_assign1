"use client";

import { useState } from "react";
import { Input } from "src/components/ui/input";
import { Button } from "src/components/ui/button";
import { quotes } from "src/data/quotes";

export default function QuoteForm() {
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = () => {
    const key = topic.trim().toLowerCase();
    if (quotes[key as keyof typeof quotes]) {
      setResults(quotes[key as keyof typeof quotes]);
    } else {
      setResults(["No quotes found for this topic."]);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md bg-white/80 p-6 rounded-2xl shadow-2xl backdrop-blur-md">
      <Input
        placeholder="Enter a topic (e.g. motivation)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="font-gabriola text-2xl"
      />
      <Button
        onClick={handleSearch}
        className="font-gabriola text-2xl px-6 py-2 bg-blue-600 text-white hover:bg-blue-700"
      >
        Get Quotes
      </Button>

      <div className="mt-4 text-center space-y-3">
        {results.map((quote, index) => (
          <p key={index} className="font-gabriola text-3xl text-gray-800">
            “{quote}”
          </p>
        ))}
      </div>
    </div>
  );
}
