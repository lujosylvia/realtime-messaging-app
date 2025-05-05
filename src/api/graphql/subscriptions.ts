/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage(
  $content: String
  $author: String
  $id: ID
  $thread: ID
  $sendTime: AWSDateTime
) {
  onCreateMessage(
    content: $content
    author: $author
    id: $id
    thread: $thread
    sendTime: $sendTime
  ) {
    content
    author
    id
    thread
    sendTime
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage(
  $content: String
  $author: String
  $id: ID
  $thread: ID
  $sendTime: AWSDateTime
) {
  onUpdateMessage(
    content: $content
    author: $author
    id: $id
    thread: $thread
    sendTime: $sendTime
  ) {
    content
    author
    id
    thread
    sendTime
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage(
  $content: String
  $author: String
  $id: ID
  $thread: ID
  $sendTime: AWSDateTime
) {
  onDeleteMessage(
    content: $content
    author: $author
    id: $id
    thread: $thread
    sendTime: $sendTime
  ) {
    content
    author
    id
    thread
    sendTime
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onCreateThread = /* GraphQL */ `subscription OnCreateThread(
  $id: ID
  $participants: [ID!]
  $startDateTime: AWSDateTime
  $lastMessageIn: AWSDateTime
) {
  onCreateThread(
    id: $id
    participants: $participants
    startDateTime: $startDateTime
    lastMessageIn: $lastMessageIn
  ) {
    id
    participants
    startDateTime
    lastMessageIn
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateThreadSubscriptionVariables,
  APITypes.OnCreateThreadSubscription
>;
export const onUpdateThread = /* GraphQL */ `subscription OnUpdateThread(
  $id: ID
  $participants: [ID!]
  $startDateTime: AWSDateTime
  $lastMessageIn: AWSDateTime
) {
  onUpdateThread(
    id: $id
    participants: $participants
    startDateTime: $startDateTime
    lastMessageIn: $lastMessageIn
  ) {
    id
    participants
    startDateTime
    lastMessageIn
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateThreadSubscriptionVariables,
  APITypes.OnUpdateThreadSubscription
>;
export const onDeleteThread = /* GraphQL */ `subscription OnDeleteThread(
  $id: ID
  $participants: [ID!]
  $startDateTime: AWSDateTime
  $lastMessageIn: AWSDateTime
) {
  onDeleteThread(
    id: $id
    participants: $participants
    startDateTime: $startDateTime
    lastMessageIn: $lastMessageIn
  ) {
    id
    participants
    startDateTime
    lastMessageIn
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteThreadSubscriptionVariables,
  APITypes.OnDeleteThreadSubscription
>;
export const onCreateCognitoUser = /* GraphQL */ `subscription OnCreateCognitoUser($id: ID, $username: String) {
  onCreateCognitoUser(id: $id, username: $username) {
    id
    username
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCognitoUserSubscriptionVariables,
  APITypes.OnCreateCognitoUserSubscription
>;
export const onUpdateCognitoUser = /* GraphQL */ `subscription OnUpdateCognitoUser($id: ID, $username: String) {
  onUpdateCognitoUser(id: $id, username: $username) {
    id
    username
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCognitoUserSubscriptionVariables,
  APITypes.OnUpdateCognitoUserSubscription
>;
export const onDeleteCognitoUser = /* GraphQL */ `subscription OnDeleteCognitoUser($id: ID, $username: String) {
  onDeleteCognitoUser(id: $id, username: $username) {
    id
    username
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCognitoUserSubscriptionVariables,
  APITypes.OnDeleteCognitoUserSubscription
>;
