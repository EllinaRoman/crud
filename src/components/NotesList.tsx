import NoteCard from "./NoteCard";

export default function NotesList({
  notes,
  onRemove,
}: {
  notes: { id: number; content: string }[];
  onRemove: (id: number) => void;
}) {
  return notes.map((note) => {
    return (
      <NoteCard
        id={note.id}
        content={note.content}
        key={note.id}
        onRemove={onRemove}
      />
    );
  });
}
