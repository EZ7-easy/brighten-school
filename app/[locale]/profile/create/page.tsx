// app/profile/create/page.tsx

import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import FormComponent from './_components/FormComponent';

export default async function CreateProfilePage() {
  const user = await currentUser();
  if (user?.privateMetadata?.hasProfile) redirect('/');

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded-md max-w-lg">
        <FormComponent />
      </div>
    </section>
  );
}
