"use client";

import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

interface BoardProps {
  title: string;
  id: string;
}

export default function Board({ title, id }: BoardProps) {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  const { pending } = useFormStatus();

  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>board title: {title}</p>
      <Button type="submit" variant="destructive" size="sm" disabled={pending}>
        Delete
      </Button>
    </form>
  );
}
