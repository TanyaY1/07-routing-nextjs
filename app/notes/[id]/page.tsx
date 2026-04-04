import NotePreview from "@/components/NotePreview/NotePreview";

type Props = {
  params: {
    id: string;
  };
};

export default function NoteDetailsPage({ params }: Props) {
  return <NotePreview id={params.id} />;
}