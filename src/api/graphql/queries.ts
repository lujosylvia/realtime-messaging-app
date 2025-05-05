/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getMessage = /* GraphQL */ `query GetMessage($id: ID!, $sendTime: AWSDateTime!) {
  getMessage(id: $id, sendTime: $sendTime) {
    content
    author
    id
    thread
    sendTime
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: TableMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      content
      author
      id
      thread
      sendTime
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const queryMessagesByIdThreadIndex = /* GraphQL */ `query QueryMessagesByIdThreadIndex($thread: ID!, $first: Int, $after: String) {
  queryMessagesByIdThreadIndex(thread: $thread, first: $first, after: $after) {
    items {
      content
      author
      id
      thread
      sendTime
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.QueryMessagesByIdThreadIndexQueryVariables,
  APITypes.QueryMessagesByIdThreadIndexQuery
>;
export const getThread = /* GraphQL */ `query GetThread($id: ID!, $lastMessageIn: AWSDateTime!) {
  getThread(id: $id, lastMessageIn: $lastMessageIn) {
    id
    participants
    startDateTime
    lastMessageIn
    __typename
  }
}
` as GeneratedQuery<APITypes.GetThreadQueryVariables, APITypes.GetThreadQuery>;
export const listThreads = /* GraphQL */ `query ListThreads(
  $filter: TableThreadFilterInput
  $limit: Int
  $nextToken: String
) {
  listThreads(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      participants
      startDateTime
      lastMessageIn
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListThreadsQueryVariables,
  APITypes.ListThreadsQuery
>;
export const getCognitoUser = /* GraphQL */ `query GetCognitoUser($id: ID!) {
  getCognitoUser(id: $id) {
    id
    username
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCognitoUserQueryVariables,
  APITypes.GetCognitoUserQuery
>;
export const listCognitoUsers = /* GraphQL */ `query ListCognitoUsers(
  $filter: TableCognitoUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listCognitoUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCognitoUsersQueryVariables,
  APITypes.ListCognitoUsersQuery
>;
