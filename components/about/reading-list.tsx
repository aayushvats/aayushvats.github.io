import React from "react";

interface ReadingListProps {
  books: string[];
}

export function ReadingList({ books }: ReadingListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-[22px] font-medium pb-5 font-medium">Reading List</h2>
      <p>Here are some of the books that have made the most impact on me.</p>
      <ul className="list-disc pl-5 pt-2 space-y-2 text-[16px] text-muted-foreground">
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
}
