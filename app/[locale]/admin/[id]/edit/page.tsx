import { getQuizById } from "@/actions/quizAction"; // define this to fetch a quiz
import EditQuizForm from "../../_components/EditQuizForm";

interface EditPageProps {
  params: { id: string };
}

export default async function EditQuizPage({ params }: EditPageProps) {
  const quiz = await getQuizById(params.id);

  if (!quiz) return <div>Quiz not found</div>;

  return <EditQuizForm initialData={quiz} quizId={params.id} />;
}
