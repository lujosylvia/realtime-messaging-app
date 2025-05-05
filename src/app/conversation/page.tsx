'use client';

import { Icon } from "@iconify/react/dist/iconify.js";
import { useAuth } from "react-oidc-context";

export default function ConversationPage() {
  const auth = useAuth();

  if (auth.isLoading) {
    return <p className="text-small">Loading...</p>
  }

  if (!auth.isLoading && !auth.isAuthenticated) {
    auth.signinRedirect();
  }

  return (
    <div className="flex flex-col items-center justify-center h-[100%]">
      <div className="flex-1 flex flex-col self-center items-center justify-center">
        <Icon icon="iconoir:chat-bubble-empty" fontSize={96}/>
        <p className="text-large">Select a thread, or create a new one!</p>
      </div>
    </div>
  )
}