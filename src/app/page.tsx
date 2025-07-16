import BoardList from "./components/BoardList";

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Kanban Boards</h1>
      <BoardList />
    </main>
  );
}
