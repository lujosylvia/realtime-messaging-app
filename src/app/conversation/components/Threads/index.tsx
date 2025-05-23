'use client';

import { useQuery } from "@tanstack/react-query";
import * as client from "../../../../api/client";
import { useRouter } from 'next/navigation';
import { Button, Card, useDisclosure } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { MouseEventHandler, useMemo } from "react";
import CreateThreadModal from "./CreateThreadModal";
import { useAuth } from "react-oidc-context";


export default function Threads() {
  const router = useRouter();
  const auth = useAuth();
  const username = useMemo(() => auth.user?.profile?.['cognito:username'], [auth])
  const { data, refetch } = useQuery({
    queryKey: [`threads-${username}`],
    queryFn: () => client.fetchThreads(auth?.user?.id_token!),
    enabled: !!auth.user?.id_token && !!username
  });
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const threads = useMemo(() => data?.listThreads?.items, [data]);

  const onCreateThreadSuccess = () => {
    refetch();
  }

  const onSelectThread = (threadId: string): MouseEventHandler<HTMLDivElement> => () => {
    router.push(`/conversation/${threadId}`);
  }

  return (
    <div className="flex flex-col">
      <Card isBlurred radius="none" className="h-[3rem] flex flex-row py-2 pr-2 pl-4 justify-between items-center">
        <p className="text-medium">Threads</p>
        <Button className="flex justify-self-end border border-default" onPress={onOpen}><Icon fontSize={24} icon="material-symbols-light:add" /></Button>
      </Card>
      {
        threads?.map((thread, index) => (
          <div 
            key={thread?.id ?? index}
            className="flex-1 flex-col bg-content1/30 border-bg-content1 p-3 w-[100%]"
            onClick={onSelectThread(thread?.id!)}
          >
            <div className="flex-1"><p className="text-medium truncate">{thread?.participants?.join(', ')}</p></div>
            <div className="flex-1"><p className="text-small">{new Date(thread?.startDateTime ?? '').toLocaleDateString()}</p></div>
          </div>
        )) ?? <div>No threads</div>
      }
      <CreateThreadModal isOpen={isOpen} onOpenChange={onOpenChange} onSuccess={onCreateThreadSuccess} />
    </div>
  );
}