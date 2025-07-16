"use client";

import { useState } from "react";
import { useCreateCardMutation } from "@/graphql/generated/graphql";

export default function AddCardForm({ columnId }: { columnId: string }) {
  const [content, setContent] = useState("");
  const [addCard, { loading }] = useCreateCardMutation({
    refetchQueries: ["GetCards"], // or update Apollo cache manually
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    await addCard({ variables: { columnId, content, position: 0 } });
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2 flex gap-2">
      <input
        type="text"
        placeholder="New card content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="flex-grow p-1 border rounded"
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading}
        className="px-3 bg-blue-500 text-white rounded"
      >
        Add
      </button>
    </form>
  );
}
