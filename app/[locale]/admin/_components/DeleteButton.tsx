"use client";

import { deleteQuiz } from "@/actions/quizAction";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await deleteQuiz(id).then(() => toast.success("Quiz deleted successfully"));
      
      router.refresh(); // Refresh page to update quiz list
    } catch (err) {
      toast.error("Failed to delete quiz");
    }
  };

  return (
    <Button variant="destructive" onClick={handleDelete}>
      Delete
    </Button>
  );
}
