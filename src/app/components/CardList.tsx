"use client";

import { useGetCardsQuery } from "@/graphql/generated/graphql";

export default function CardList({ columnId }: { columnId: string }) {
  const { data, loading, error } = useGetCardsQuery({
    variables: { columnId },
  });

  if (loading) return <p>Loading cards...</p>;
  if (error) return <p>Error loading cards: {error.message}</p>;

  return (
    <div className="space-y-2 mt-2">
      {data?.cards.map((card) => (
        <div key={card.id} className="p-2 bg-white rounded shadow">
          {card.content}
        </div>
      ))}
    </div>
  );
}
