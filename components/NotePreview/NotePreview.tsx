import css from "./NotePreview.module.css";

type NotePreviewProps = {
  id: string;
};

export default function NotePreview({ id }: NotePreviewProps) {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Note details</h2>
      <p className={css.text}>Note id: {id}</p>
    </div>
  );
}