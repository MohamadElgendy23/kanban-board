"use client";

import { useGetColumnsQuery } from "@/graphql/generated/graphql";
import CardList from "./CardList";
import AddCardForm from "./AddCardForm";

export default function ColumnList({ boardId }: { boardId: string }) {
  const { data, loading, error } = useGetColumnsQuery({
    variables: { boardId },
  });

  if (loading) return <p>Loading columns...</p>;
  if (error) return <p>Error loading columns: {error.message}</p>;

  return (
    <div className="flex gap-4 overflow-x-auto mt-2">
      {data?.columns.map((column) => (
        <div key={column.id} className="min-w-[250px] p-2 bg-gray-100 rounded">
          <h3 className="font-semibold">{column.name}</h3>
          <CardList columnId={column.id} />
          <AddCardForm columnId={column.id} />
        </div>
      ))}
    </div>
  );
}
