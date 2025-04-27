"use client";

import { UserProfile } from "@clerk/nextjs";

function Profile() {
  return (
    <div className="w-full min-h-screen flex  justify-center p-4">
      <div className="w-full max-w-4xl">
        <UserProfile routing="hash" />
      </div>
    </div>
  );
}

export default Profile;
