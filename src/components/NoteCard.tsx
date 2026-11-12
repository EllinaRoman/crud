export default function NoteCard({
  id,
  content,
  onRemove,
}: {
  id: number;
  content: string;
  onRemove: (id: number) => void;
}) {
  return (
    <div>
      {content}
      <button
        onClick={() => {
          onRemove(id);
        }}
      >
        x
      </button>
    </div>
  );
}
