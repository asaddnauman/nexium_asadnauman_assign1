"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { quotes } from "../data/quotes";

export default function QuoteForm() {
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = () => {
    const key = topic.toLowerCase();
    if (quotes[key as keyof typeof quotes]) {
      setResults(quotes[key as keyof typeof quotes]);
    } else {
      setResults(["No quotes found for this topic."]);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md bg-white/70 p-6 rounded-2xl shadow-xl">
      <Input
        placeholder="Enter a topic (e.g. motivation)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="font-gabriola text-xl"
      />
      <Button onClick={handleSearch} className="font-gabriola text-lg">
        Get Quotes
      </Button>

      <div className="mt-4 text-center space-y-2">
        {results.map((quote, index) => (
          <p key={index} className="font-gabriola text-2xl text-gray-800">
            “{quote}”
          </p>
        ))}
      </div>
    </div>
  );
}
