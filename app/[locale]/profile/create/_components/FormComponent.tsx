// app/profile/create/FormComponent.tsx
'use client';

import FormInput from '@/components/form/FormInput';
import { SubmitButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import { createProfileAction } from '@/utils/actions';

export default function FormComponent() {
  return (
    <FormContainer action={createProfileAction}>
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">Create Your Profile</h2>
        <p className="text-gray-600 mb-6">Let’s set up your account details to get started.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            name="firstName"
            type="text"
            label="First Name"
            placeholder="e.g., John"
          />
          <FormInput
            name="lastName"
            type="text"
            label="Last Name"
            placeholder="e.g., Doe"
          />
        </div>

        <div className="mt-6">
          <FormInput
            name="username"
            type="text"
            label="Username"
            placeholder="e.g., johndoe123"
          />
        </div>

        <SubmitButton
          text="Create Profile"
          className="mt-8 w-full bg-black text-white hover:bg-gray-900"
        />
      </div>
    </FormContainer>
  );
}
