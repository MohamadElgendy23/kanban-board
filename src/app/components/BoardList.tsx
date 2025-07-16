"use client";

import { useGetBoardsQuery } from "@/graphql/generated/graphql";
import ColumnList from "./ColumnList";

export default function BoardList() {
  const { data, loading, error } = useGetBoardsQuery();

  if (loading) return <p>Loading boards...</p>;
  if (error) return <p>Error loading boards: {error.message}</p>;

  return (
    <div className="space-y-6">
      {data?.boards.map((board) => (
        <div key={board.id} className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">{board.name}</h2>
          <ColumnList boardId={board.id} />
        </div>
      ))}
    </div>
  );
}
