"use client";

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Modal from "@/components/Modal/Modal";
import { fetchNoteById } from "@/lib/api";
import css from "@/components/NotePreview/NotePreview.module.css";

type Props = {
  id: string;
};

export default function NotePreviewClient({ id }: Props) {
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) {
    return (
      <Modal onClose={() => router.back()}>
        <p className={css.text}>Loading...</p>
      </Modal>
    );
  }

  if (isError || !data) {
    return (
      <Modal onClose={() => router.back()}>
        <p className={css.text}>Failed to load note.</p>
      </Modal>
    );
  }

  return (
    <Modal onClose={() => router.back()}>
      <div className={css.container}>
        <h2 className={css.title}>{data.title}</h2>
        <p className={css.text}>
          <strong>Tag:</strong> {data.tag}
        </p>
        <p className={css.text}>{data.content}</p>
        <p className={css.text}>
          <strong>Created at:</strong> {data.createdAt}
        </p>
      </div>
    </Modal>
  );
}