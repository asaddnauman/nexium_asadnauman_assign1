"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import quotes from "@/data/quotes.json";
import Image from "next/image";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [filteredQuotes, setFilteredQuotes] = useState(quotes.slice(0, 3));

  const handleSearch = () => {
    const result = quotes.filter((q) =>
      q.topic.toLowerCase().includes(topic.toLowerCase())
    );
    setFilteredQuotes(result.slice(0, 3));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-8"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="max-w-xl mx-auto text-center text-white font-serif">
        <h1 className="text-5xl font-bold mb-6 font-decorative">
          Quote Generator
        </h1>
        <div className="flex gap-2 justify-center mb-6">
          <Input
            placeholder="Enter a topic..."
            className="bg-white text-black"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>

        {filteredQuotes.map((quote, index) => (
          <Card key={index} className="mb-4 bg-white/80 text-black shadow-lg">
            <CardHeader>
              <CardTitle>{quote.topic}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{quote.text}</p>
              <p className="mt-2 text-sm text-right italic">— {quote.author}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
