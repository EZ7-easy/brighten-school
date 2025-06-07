// app/admin/page.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AdminClientPage from "./AdminClientPage";

export default async function AdminPage() {
  const user = await currentUser();

  if (!user || user.privateMetadata.role !== "admin") {
    return redirect("/");
  }

  return <AdminClientPage userName={user.firstName || "Admin"} />;
}
