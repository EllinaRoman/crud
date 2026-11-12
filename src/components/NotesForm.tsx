import { useState, type SubmitEvent } from "react";

export default function NotesForm({
  onAdd,
}: {
  onAdd: (content: string) => void;
}) {
  const [content, setContent] = useState("");

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content.trim()) {
      return;
    }
    onAdd(content.trim());
    setContent("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button type="submit">Добавить</button>
      </form>
    </>
  );
}
