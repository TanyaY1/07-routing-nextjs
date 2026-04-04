"use client";

import css from "./NotesPage.module.css";

type Props = {
  tag?: string;
};

export default function NotesClient({ tag }: Props) {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Notes</h1>
      <p className={css.text}>
        {tag ? `Filtered by tag: ${tag}` : "All notes"}
      </p>
    </div>
  );
}