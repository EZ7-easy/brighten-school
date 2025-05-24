import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import {
  updateProfileAction,
  fetchProfile,
} from "@/utils/actions";

import ImageInputContainer from "@/components/form/ImageInputContainer";

async function Profile() {
  const profile = await fetchProfile();

  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold mb-8 capitalize text-gray-800">
        user profile
      </h1>
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
        {/* image input container */}
        <ImageInputContainer
          image={profile.profileImage}
          name={profile.username}
        />

        <FormContainer action={updateProfileAction}>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <FormInput
              type="text"
              name="firstName"
              label="First Name"
              defaultValue={profile.firstName}
            />
            <FormInput
              type="text"
              name="lastName"
              label="Last Name"
              defaultValue={profile.lastName}
            />
            <FormInput
              type="text"
              name="username"
              label="Username"
              defaultValue={profile.username}
            />
          </div>
          <SubmitButton
            text="Update Profile"
            className="bg-orange-500 mt-2"
          />
        </FormContainer>
      </div>
    </section>
  );
}
export default Profile;
