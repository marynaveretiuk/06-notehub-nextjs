"use client";

import { FormEvent, useState } from "react";
import css from "./NoteForm.module.css";
import type { CreateNoteData } from "@/types/note";

interface NoteFormProps {
  onSubmit: (data: CreateNoteData) => void;
}

export default function NoteForm({ onSubmit }: NoteFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("Todo");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({
      title,
      content,
      tag,
    });

    setTitle("");
    setContent("");
    setTag("Todo");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />

      <textarea
        className={css.textarea}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />

      <select
        className={css.select}
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      >
        <option value="Todo">Todo</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Meeting">Meeting</option>
        <option value="Shopping">Shopping</option>
      </select>

      <button className={css.button} type="submit">
        Create note
      </button>
    </form>
  );
}
