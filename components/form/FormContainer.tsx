"use client"

import { useActionState } from "react";
import { useEffect } from "react";
import { toast } from "sonner"; // Import toast instead of Toaster
import { actionFunction } from "@/utils/types";

const initialState = {
  message: "",
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useActionState(action, initialState);
  useEffect(() => {
    if (state.message) {
      toast(state.message); // Use toast to display the message
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
}
export default FormContainer;