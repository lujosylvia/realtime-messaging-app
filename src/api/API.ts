/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMessageInput = {
  content: string,
  author: string,
  id?: string | null,
  thread: string,
  sendTime?: string | null,
};

export type message = {
  __typename: "message",
  content: string,
  author: string,
  id: string,
  thread: string,
  sendTime: string,
};

export type UpdateMessageInput = {
  content?: string | null,
  author?: string | null,
  id: string,
  thread?: string | null,
  sendTime: string,
};

export type DeleteMessageInput = {
  id: string,
  sendTime: string,
};

export type CreateThreadInput = {
  id?: string | null,
  participants: Array< string >,
  startDateTime?: string | null,
  lastMessageIn?: string | null,
};

export type Thread = {
  __typename: "Thread",
  id: string,
  participants: Array< string >,
  startDateTime: string,
  lastMessageIn: string,
};

export type UpdateThreadInput = {
  id: string,
  participants?: Array< string > | null,
  startDateTime?: string | null,
  lastMessageIn: string,
};

export type DeleteThreadInput = {
  id: string,
  lastMessageIn: string,
};

export type CreateCognitoUserInput = {
  username: string,
};

export type CognitoUser = {
  __typename: "CognitoUser",
  id: string,
  username: string,
};

export type UpdateCognitoUserInput = {
  id: string,
  username?: string | null,
};

export type DeleteCognitoUserInput = {
  id: string,
};

export type TableMessageFilterInput = {
  content?: TableStringFilterInput | null,
  author?: TableStringFilterInput | null,
  id?: TableIDFilterInput | null,
  thread?: TableIDFilterInput | null,
  sendTime?: TableStringFilterInput | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  size?: ModelSizeInput | null,
};

export type messageConnection = {
  __typename: "messageConnection",
  items?:  Array<message | null > | null,
  nextToken?: string | null,
};

export type TableThreadFilterInput = {
  id?: TableIDFilterInput | null,
  participants?: TableStringFilterInput | null,
  startDateTime?: TableStringFilterInput | null,
  lastMessageIn?: TableStringFilterInput | null,
};

export type ThreadConnection = {
  __typename: "ThreadConnection",
  items?:  Array<Thread | null > | null,
  nextToken?: string | null,
};

export type TableCognitoUserFilterInput = {
  id?: TableIDFilterInput | null,
  username?: TableStringFilterInput | null,
};

export type CognitoUserConnection = {
  __typename: "CognitoUserConnection",
  items?:  Array<CognitoUser | null > | null,
  nextToken?: string | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "message",
    content: string,
    author: string,
    id: string,
    thread: string,
    sendTime: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "message",
    content: string,
    author: string,
    id: string,
    thread: string,
    sendTime: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "message",
    content: string,
    author: string,
    id: string,
    thread: string,
    sendTime: string,
  } | null,
};

export type CreateThreadMutationVariables = {
  input: CreateThreadInput,
};

export type CreateThreadMutation = {
  createThread?:  {
    __typename: "Thread",
    id: string,
    participants: Array< string >,
    startDateTime: string,
    lastMessageIn: string,
  } | null,
};

export type UpdateThreadMutationVariables = {
  input: UpdateThreadInput,
};

export type UpdateThreadMutation = {
  updateThread?:  {
    __typename: "Thread",
    id: string,
    participants: Array< string >,
    startDateTime: string,
    lastMessageIn: string,
  } | null,
};

export type DeleteThreadMutationVariables = {
  input: DeleteThreadInput,
};

export type DeleteThreadMutation = {
  deleteThread?:  {
    __typename: "Thread",
    id: string,
    participants: Array< string >,
    startDateTime: string,
    lastMessageIn: string,
  } | null,
};

export type CreateCognitoUserMutationVariables = {
  input: CreateCognitoUserInput,
};

export type CreateCognitoUserMutation = {
  createCognitoUser?:  {
    __typename: "CognitoUser",
    id: string,
    username: string,
  } | null,
};

export type UpdateCognitoUserMutationVariables = {
  input: UpdateCognitoUserInput,
};

export type UpdateCognitoUserMutation = {
  updateCognitoUser?:  {
    __typename: "CognitoUser",
    id: string,
    username: string,
  } | null,
};

export type DeleteCognitoUserMutationVariables = {
  input: DeleteCognitoUserInput,
};

export type DeleteCognitoUserMutation = {
  deleteCognitoUser?:  {
    __typename: "CognitoUser",
    id: string,
    username: string,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
  sendTime: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "message",
    content: string,
    author: string,
    id: string,
    thread: string,
    sendTime: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: TableMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "messageConnection",
    items?:  Array< {
      __typename: "message",
      content: string,
      author: string,
      id: string,
      thread: string,
      sendTime: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type QueryMessagesByIdThreadIndexQueryVariables = {
  thread: string,
  first?: number | null,
  after?: string | null,
};

export type QueryMessagesByIdThreadIndexQuery = {
  queryMessagesByIdThreadIndex?:  {
    __typename: "messageConnection",
    items?:  Array< {
      __typename: "message",
      content: string,
      author: string,
      id: string,
      thread: string,
      sendTime: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetThreadQueryVariables = {
  id: string,
  lastMessageIn: string,
};

export type GetThreadQuery = {
  getThread?:  {
    __typename: "Thread",
    id: string,
    participants: Array< string >,
    startDateTime: string,
    lastMessageIn: string,
  } | null,
};

export type ListThreadsQueryVariables = {
  filter?: TableThreadFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListThreadsQuery = {
  listThreads?:  {
    __typename: "ThreadConnection",
    items?:  Array< {
      __typename: "Thread",
      id: string,
      participants: Array< string >,
      startDateTime: string,
      lastMessageIn: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCognitoUserQueryVariables = {
  id: string,
};

export type GetCognitoUserQuery = {
  getCognitoUser?:  {
    __typename: "CognitoUser",
    id: string,
    username: string,
  } | null,
};

export type ListCognitoUsersQueryVariables = {
  filter?: TableCognitoUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCognitoUsersQuery = {
  listCognitoUsers?:  {
    __typename: "CognitoUserConnection",
    items?:  Array< {
      __typename: "CognitoUser",
      id: string,
      username: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  content?: string | null,
  author?: string | null,
  id?: string | null,
  thread?: string | null,
  sendTime?: string | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "message",
    content: string,
    author: string,
    id: string,
    thread: string,
    sendTime: string,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  content?: string | null,
  author?: string | null,
  id?: string | null,
  thread?: string | null,
  sendTime?: string | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "message",
    content: string,
    author: string,
    id: string,
    thread: string,
    sendTime: string,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  content?: string | null,
  author?: string | null,
  id?: string | null,
  thread?: string | null,
  sendTime?: string | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "message",
    content: string,
    author: string,
    id: string,
    thread: string,
    sendTime: string,
  } | null,
};

export type OnCreateThreadSubscriptionVariables = {
  id?: string | null,
  participants?: Array< string > | null,
  startDateTime?: string | null,
  lastMessageIn?: string | null,
};

export type OnCreateThreadSubscription = {
  onCreateThread?:  {
    __typename: "Thread",
    id: string,
    participants: Array< string >,
    startDateTime: string,
    lastMessageIn: string,
  } | null,
};

export type OnUpdateThreadSubscriptionVariables = {
  id?: string | null,
  participants?: Array< string > | null,
  startDateTime?: string | null,
  lastMessageIn?: string | null,
};

export type OnUpdateThreadSubscription = {
  onUpdateThread?:  {
    __typename: "Thread",
    id: string,
    participants: Array< string >,
    startDateTime: string,
    lastMessageIn: string,
  } | null,
};

export type OnDeleteThreadSubscriptionVariables = {
  id?: string | null,
  participants?: Array< string > | null,
  startDateTime?: string | null,
  lastMessageIn?: string | null,
};

export type OnDeleteThreadSubscription = {
  onDeleteThread?:  {
    __typename: "Thread",
    id: string,
    participants: Array< string >,
    startDateTime: string,
    lastMessageIn: string,
  } | null,
};

export type OnCreateCognitoUserSubscriptionVariables = {
  id?: string | null,
  username?: string | null,
};

export type OnCreateCognitoUserSubscription = {
  onCreateCognitoUser?:  {
    __typename: "CognitoUser",
    id: string,
    username: string,
  } | null,
};

export type OnUpdateCognitoUserSubscriptionVariables = {
  id?: string | null,
  username?: string | null,
};

export type OnUpdateCognitoUserSubscription = {
  onUpdateCognitoUser?:  {
    __typename: "CognitoUser",
    id: string,
    username: string,
  } | null,
};

export type OnDeleteCognitoUserSubscriptionVariables = {
  id?: string | null,
  username?: string | null,
};

export type OnDeleteCognitoUserSubscription = {
  onDeleteCognitoUser?:  {
    __typename: "CognitoUser",
    id: string,
    username: string,
  } | null,
};
