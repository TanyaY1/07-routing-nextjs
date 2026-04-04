"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import css from "@/components/NotePreview/NotePreview.module.css";

type Props = {
  id: string;
};

export default function NotePreviewClient({ id }: Props) {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <div className={css.container}>
        <h2 className={css.title}>Note preview</h2>
        <p className={css.text}>Note id: {id}</p>
      </div>
    </Modal>
  );
}