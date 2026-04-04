import Link from 'next/link';
import css from './Home.module.css';

export default function Home() {
  return (
    <section className={css.container}>
      <h1 className={css.title}>NoteHub</h1>
      <p className={css.description}>
        Welcome to the app for managing your notes.
      </p>
      <Link href="/notes/filter/all" className={css.link}>
        Open notes
      </Link>
    </section>
  );
}