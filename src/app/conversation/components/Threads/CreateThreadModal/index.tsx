'use client';

import { useQuery } from "@tanstack/react-query";
import * as client from "../../../../../api/client";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, Textarea } from "@heroui/react";
import { ChangeEventHandler, useMemo, useState } from "react";
import { CreateMessageInput, CreateThreadInput } from "@/api/API";
import { useAuth } from "react-oidc-context";


interface CreateThreadModalProps {
  isOpen?: boolean;
  onOpenChange?: ((isOpen: boolean) => void);
  onSuccess?: () => void;
}

export default function CreateThreadModal({ isOpen, onOpenChange, onSuccess }: Readonly<CreateThreadModalProps>) {
  const auth = useAuth();
  const username = useMemo(() => auth?.user?.profile?.['cognito:username'], [auth]);
  const { data: usersData } = useQuery({
    queryKey: ['users'],
    queryFn: () => client.fetchUsers(auth.user?.id_token!),
    enabled: !!auth.user?.id_token && !!username
  })

  const [createThreadForm, setCreateThreadForm] = useState<{ participants: string[], firstMessage: string}>({ participants: [], firstMessage: '' });

  const usersOptions: {label?: string, value?: string}[] = useMemo(() => usersData?.listCognitoUsers?.items?.map(user => {
    if (user?.username === username) return null;
    return {
      label: user?.username,
      value: user?.username
    }
  })?.filter(option => !!option) ?? [], [usersData]);

  const onParticipantsChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const participants = event.target.value.split(',')

    setCreateThreadForm({
      ...createThreadForm,
      participants: participants,
    })
  };

  const onMessageChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCreateThreadForm({
      ...createThreadForm,
      firstMessage: event.target.value
    })
  }

  const onSubmitCreateThread = (onClose: () => void) => async () => {
    const createThreadInput: CreateThreadInput = {
      participants: [ ...createThreadForm.participants, (username as string)!],
      startDateTime: new Date().toISOString(),
      lastMessageIn: new Date().toISOString(),
    }

    if (!auth?.user?.profile?.['cognito:username']) {
      return;
    }

    try {
      const threadResponse = await client.postThread(createThreadInput, auth.user?.id_token!);

      const createMessageInput: CreateMessageInput = {
        content: createThreadForm.firstMessage,
        author: auth.user.profile['cognito:username'] as string,
        thread: threadResponse.createThread?.id!,
        sendTime: new Date().toISOString(),
      }
      const messageResponse = await client.postMessage(createMessageInput, auth.user?.id_token!)

      onSuccess && onSuccess();
    } catch (err) {
      console.log('error creating thread', err);
    }
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className='dark'>
        {(onClose) => {
          return (
          <>
            <ModalHeader><p className="text-large">Create New Thread</p></ModalHeader>
            <ModalBody className='dark'>
            <Select
              className="dark"
              label="Particpants"
              placeholder="Select"
              selectionMode="multiple"
              onChange={onParticipantsChange}
              value={createThreadForm.participants}
            >
            {usersOptions?.map((user) => (
              <SelectItem className='dark' key={user.value}>{user.label}</SelectItem>
            ))}
          </Select>
          <Textarea label="Message" onChange={onMessageChange} value={createThreadForm.firstMessage}></Textarea>
            </ModalBody>
            <ModalFooter>
                <Button className="flex justify-self-end border border-default" onPress={onClose}>Cancel</Button>
                <Button className="flex justify-self-end border border-default" onPress={onSubmitCreateThread(onClose)}>Create</Button>
              </ModalFooter>
          </>
        )}}
        </ModalContent>
      </Modal>
  )
}