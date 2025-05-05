/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createMessage = /* GraphQL */ `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
    content
    author
    id
    thread
    sendTime
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage($input: UpdateMessageInput!) {
  updateMessage(input: $input) {
    content
    author
    id
    thread
    sendTime
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage($input: DeleteMessageInput!) {
  deleteMessage(input: $input) {
    content
    author
    id
    thread
    sendTime
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const createThread = /* GraphQL */ `mutation CreateThread($input: CreateThreadInput!) {
  createThread(input: $input) {
    id
    participants
    startDateTime
    lastMessageIn
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateThreadMutationVariables,
  APITypes.CreateThreadMutation
>;
export const updateThread = /* GraphQL */ `mutation UpdateThread($input: UpdateThreadInput!) {
  updateThread(input: $input) {
    id
    participants
    startDateTime
    lastMessageIn
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateThreadMutationVariables,
  APITypes.UpdateThreadMutation
>;
export const deleteThread = /* GraphQL */ `mutation DeleteThread($input: DeleteThreadInput!) {
  deleteThread(input: $input) {
    id
    participants
    startDateTime
    lastMessageIn
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteThreadMutationVariables,
  APITypes.DeleteThreadMutation
>;
export const createCognitoUser = /* GraphQL */ `mutation CreateCognitoUser($input: CreateCognitoUserInput!) {
  createCognitoUser(input: $input) {
    id
    username
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCognitoUserMutationVariables,
  APITypes.CreateCognitoUserMutation
>;
export const updateCognitoUser = /* GraphQL */ `mutation UpdateCognitoUser($input: UpdateCognitoUserInput!) {
  updateCognitoUser(input: $input) {
    id
    username
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCognitoUserMutationVariables,
  APITypes.UpdateCognitoUserMutation
>;
export const deleteCognitoUser = /* GraphQL */ `mutation DeleteCognitoUser($input: DeleteCognitoUserInput!) {
  deleteCognitoUser(input: $input) {
    id
    username
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCognitoUserMutationVariables,
  APITypes.DeleteCognitoUserMutation
>;
