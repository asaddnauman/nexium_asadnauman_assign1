"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import quotes from "@/data/quotes.json";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [filteredQuotes, setFilteredQuotes] = useState(quotes);

  const handleSearch = () => {
    const filtered = quotes.filter((quote) =>
      quote.text.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredQuotes(filtered);
  };

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Quote Finder</h1>

      <div className="flex gap-2 mb-6">
        <Input
          placeholder="Search quote..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      {filteredQuotes.length === 0 ? (
        <p>No quotes found.</p>
      ) : (
        <div className="grid gap-4">
          {filteredQuotes.map((quote, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{quote.author || "Unknown"}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{quote.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
