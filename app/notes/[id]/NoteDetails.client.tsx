"use client";

import css from "./NoteDetails.module.css";

type Props = {
  id: string;
};

export default function NoteDetailsClient({ id }: Props) {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Note details</h1>
      <p className={css.text}>Note id: {id}</p>
    </div>
  );
}