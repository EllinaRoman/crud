import { useState } from "react";
import { useEffect } from "react";
import NotesForm from "./components/NotesForm";
import NotesList from "./components/NotesList";

type Note = { id: number; content: string };

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:7070/notes");

      if (!res.ok) throw new Error("Network response was not ok");

      const data = await res.json();

      setNotes(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async (content: string) => {
    const res = await fetch("http://localhost:7070/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: 0, content }),
    });

    if (!res.ok) throw new Error("Network response was not ok");

    await fetchData();
  };

  const handleRemove = async (id: number) => {
    const res = await fetch(`http://localhost:7070/notes/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Network response was not ok");

    await fetchData();
  };

  return (
    <>
      <NotesForm onAdd={handleAdd} />
      <button onClick={fetchData}>Обновить</button>
      <NotesList notes={notes} onRemove={handleRemove}/>
    </>
  );
}
