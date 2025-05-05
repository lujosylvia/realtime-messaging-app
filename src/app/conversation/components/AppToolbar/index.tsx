'use client';

import { Avatar, Card } from "@heroui/react";
import { useAuth } from "react-oidc-context";

export default function AppToolbar() {
  const auth = useAuth();

  return (
    <Card radius="none" className="h-[3rem] flex flex-row gap-3 py-2 pr-2 pl-4 min-h-[5%] justify-end items-center bg-black/20">
      {
        !auth.isLoading && auth.isAuthenticated ? (
          <>
            <p className="text-small">Welcome, {auth.user?.profile?.['cognito:username'] as string}</p>
            <Avatar  />
          </>
        ) : (
          <p className="text-small">Sign in</p>
        )
      }
    </Card>
  )
}