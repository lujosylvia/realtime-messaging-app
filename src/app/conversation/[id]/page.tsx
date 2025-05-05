'use client';

import {Textarea} from "@heroui/input";
import SendButton from "../components/SendButton";
import Message from "../components/Message";
import * as client from '../../../api/client';
import { useQuery } from '@tanstack/react-query';
import { ChangeEventHandler, use, useEffect, useMemo, useState } from "react";
import { CreateMessageInput } from "@/api/API";
import { Card } from "@heroui/react";
import { useAuth } from "react-oidc-context";
import { events, EventsChannel } from "aws-amplify/api";

interface ThreadPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ThreadPage({ params }: ThreadPageProps) {
  const { id } = use(params);
  const auth = useAuth();
  const username = useMemo(() => auth?.user?.profile?.['cognito:username'], [auth]);
  const [channel, setChannel] = useState<EventsChannel | undefined>(undefined);
  const [newMessage, setNewMessage] = useState<string>('');

  const { data, isLoading: areMessagesLoading, refetch } = useQuery({
    queryKey: [`messages-${username}-${id}`],
    queryFn: () => client.fetchMessagesByThreadId(id, auth.user?.id_token!),
    enabled: !!auth.user?.id_token && !!username
  });

  const messages = data?.queryMessagesByIdThreadIndex?.items;

  useEffect(() => {
    const init = async () => {
      try {
        const newChannel = await events.connect(`messages/${id}`);
        newChannel.subscribe({
          next: (data) => {
            console.log('received', data);
            refetch();
          },
          error: (err) => console.warn('error', err),
        });

      setChannel(newChannel)
      } catch (err) {
        console.warn('err setting up channel', err);
      }
    }

    if (auth.user?.id_token) {
      init();
    }
  }, [auth.user?.id_token]);

  const onChangeMessage: ChangeEventHandler<HTMLInputElement> = (event) => {
    setNewMessage(event.target.value);
  }

  const onSendMessage = async () => {
    const newMessageInput: CreateMessageInput = {
      content: newMessage,
      author: auth.user?.profile?.['cognito:username'] as string,
      thread: id,
      sendTime: new Date().toISOString(),
    }

    try {
      await events.post(`messages/${id}`, newMessageInput, {
        authToken: auth.user?.id_token
      });
      refetch();
    } catch (err) {
      console.log('send message error', err);
      return;
    }

    setNewMessage('');
  }

  const SendMessageButton = <SendButton onClick={onSendMessage} />
  
  return (
    <>
      <div className='flex flex-col h-[90%] gap-[1rem] px-3 overflow-auto max-h-[90%]'>{
        messages?.map((message, index) => {
          if (!message) {
            return null;
          }

          return (
            <div key={`${message.author}-${index}`}  className={`flex-row w-[55%] ${message.author === username ? 'self-end' : null}`}>
          <Message 
            content={message.content} 
            author={message.author} 
            sendTime={""} 
            direction={message.author === username ? 'out' : 'in'} 
          />
          </div>
          )
        })}</div>
      <Card className='flex flex-row justify-self-end bg-default/70 border border-default dark px-2 py-2'>
        <Textarea value={newMessage} endContent={SendMessageButton} onChange={onChangeMessage} className="dark" />
      </Card>
    </>
  )
}