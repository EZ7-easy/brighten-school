import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import GetQuiz from "./_components/getQuiz";
import AdminClientPage from "./_components/AdminClientPage";

export default async function AdminPage() {
  const user = await currentUser();

  if (!user || user.privateMetadata.role !== "admin") {
    return redirect("/");
  }

  return (
    <main className="p-6 space-y-10 max-w-4xl mx-auto">
      {/* === Dashboard Header === */}
      <section className="space-y-6">
        <h1 className="text-3xl font-bold">🧠 Admin Quiz Dashboard</h1>
        <div>
          <h1 className="text-lg">Welcome to admin dashboard</h1>
          <h2 className="text-xl font-semibold underline">
            {user.firstName || "Admin"}
          </h2>
        </div>
      </section>

      {/* === Server-side rendered quiz list === */}
      <section className="space-y-6">
        <h1 className="text-2xl font-medium">❓ Current Quizzes</h1>
        <GetQuiz />
      </section>

      {/* === Client-side form === */}
      <section className="space-y-6">
        <AdminClientPage userName={user.firstName || "Admin"} />
      </section>
    </main>
  );
}
