import { GraphQLClient } from 'graphql-request';
import awsAppSyncGraphqlConfig from '../config/aws-graphql';
import { getCognitoUser, listCognitoUsers, listMessages, listThreads, queryMessagesByIdThreadIndex } from './graphql/queries';
import { createMessage, createThread, createCognitoUser } from './graphql/mutations';
import { CreateMessageInput, CreateMessageMutation, CreateThreadInput, CreateThreadMutation, GetCognitoUserQuery, GetCognitoUserQueryVariables, ListCognitoUsersQuery, ListMessagesQuery, ListThreadsQuery, QueryMessagesByIdThreadIndexQuery, QueryMessagesByIdThreadIndexQueryVariables, ListCognitoUsersQueryVariables, TableCognitoUserFilterInput, TableStringFilterInput, CreateCognitoUserInput, CreateCognitoUserMutation } from './API';

export const graphQLClient = new GraphQLClient(
  awsAppSyncGraphqlConfig.API.GraphQL.endpoint,
  {
    headers: {
      'x-api-key': awsAppSyncGraphqlConfig.API.GraphQL.apiKey,
    },
  }
);

export const fetchMessages = async (): Promise<ListMessagesQuery> => {
  return await graphQLClient.request(listMessages);
};

export const fetchMessagesByThreadId = async (threadId: string): Promise<QueryMessagesByIdThreadIndexQuery> => {
  const variables: QueryMessagesByIdThreadIndexQueryVariables = {
    thread: threadId
  }
  return await graphQLClient.request(queryMessagesByIdThreadIndex, variables);
}

export const fetchThreads = async (): Promise<ListThreadsQuery> => {
  return await graphQLClient.request(listThreads);
}

export const fetchUsers = async (): Promise<ListCognitoUsersQuery> => {
  return await graphQLClient.request(listCognitoUsers);
}

export const fetchUserById = async (userId: string): Promise<GetCognitoUserQuery> => {
  const variables: GetCognitoUserQueryVariables = {
    id: userId
  };
  return await graphQLClient.request(getCognitoUser, variables);
}

export const fetchUserByUsername = async (username: string): Promise<ListCognitoUsersQuery> => {
  const usernameFilter: TableStringFilterInput = {
    eq: username
  };

  const variables: ListCognitoUsersQueryVariables = {
    filter: {
      username: usernameFilter
    },
    limit: 1
  }

  return await graphQLClient.request(listCognitoUsers, variables);
}

export const postCognitoUser = async (input: CreateCognitoUserInput): Promise<CreateCognitoUserMutation> => {
  return await graphQLClient.request(createCognitoUser, { input });
}

export const postThread = async (input: CreateThreadInput): Promise<CreateThreadMutation> => {
  return await graphQLClient.request(createThread, { input });
}

export const postMessage = async (input: CreateMessageInput): Promise<CreateMessageMutation> => {
  return await graphQLClient.request(createMessage, { input });

}