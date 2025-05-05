import { GraphQLClient } from 'graphql-request';
import awsAppSyncGraphqlConfig from '../config/aws-graphql';
import { getCognitoUser, listCognitoUsers, listMessages, listThreads, queryMessagesByIdThreadIndex } from './graphql/queries';
import { createMessage, createThread, createCognitoUser } from './graphql/mutations';
import { CreateMessageInput, CreateMessageMutation, CreateThreadInput, CreateThreadMutation, GetCognitoUserQuery, GetCognitoUserQueryVariables, ListCognitoUsersQuery, ListMessagesQuery, ListThreadsQuery, QueryMessagesByIdThreadIndexQuery, QueryMessagesByIdThreadIndexQueryVariables, ListCognitoUsersQueryVariables, TableStringFilterInput, CreateCognitoUserInput, CreateCognitoUserMutation } from './API';

async function getAuthenticatedClient(idToken: string): Promise<GraphQLClient> {
  return new GraphQLClient(awsAppSyncGraphqlConfig.API.GraphQL.endpoint, {
    headers: {
      Authorization: idToken,
    },
  });
}

export const fetchMessages = async (idToken: string): Promise<ListMessagesQuery> => {
  const authGraphQLClient = await getAuthenticatedClient(idToken);
  return await authGraphQLClient.request(listMessages);
};

export const fetchMessagesByThreadId = async (threadId: string, idToken: string): Promise<QueryMessagesByIdThreadIndexQuery> => {
  const authGraphQLClient = await getAuthenticatedClient(idToken);

  const variables: QueryMessagesByIdThreadIndexQueryVariables = {
    thread: threadId
  }
  return await authGraphQLClient.request(queryMessagesByIdThreadIndex, variables);
}

export const fetchThreads = async (idToken: string): Promise<ListThreadsQuery> => {
  const authGraphQLClient = await getAuthenticatedClient(idToken);
  return await authGraphQLClient.request(listThreads);
}

export const fetchUsers = async (idToken: string): Promise<ListCognitoUsersQuery> => {
  const authGraphQLClient = await getAuthenticatedClient(idToken);
  return await authGraphQLClient.request(listCognitoUsers);
}

export const fetchUserById = async (userId: string, idToken: string): Promise<GetCognitoUserQuery> => {
  const authGraphQLClient = await getAuthenticatedClient(idToken);

  const variables: GetCognitoUserQueryVariables = {
    id: userId
  };
  return await authGraphQLClient.request(getCognitoUser, variables);
}

export const fetchUserByUsername = async (username: string, idToken: string): Promise<ListCognitoUsersQuery> => {
  const authGraphQLClient = await getAuthenticatedClient(idToken);

  const usernameFilter: TableStringFilterInput = {
    eq: username
  };

  const variables: ListCognitoUsersQueryVariables = {
    filter: {
      username: usernameFilter
    },
    limit: 1
  }

  return await authGraphQLClient.request(listCognitoUsers, variables);
}

export const postCognitoUser = async (input: CreateCognitoUserInput, idToken: string): Promise<CreateCognitoUserMutation> => {
  const authGraphQLClient = await getAuthenticatedClient(idToken);

  return await authGraphQLClient.request(createCognitoUser, { input });
}

export const postThread = async (input: CreateThreadInput, idToken: string): Promise<CreateThreadMutation> => {
  const authGraphQLClient = await getAuthenticatedClient(idToken);
  return await authGraphQLClient.request(createThread, { input });
}

export const postMessage = async (input: CreateMessageInput, idToken: string): Promise<CreateMessageMutation> => {
  const authGraphQLClient = await getAuthenticatedClient(idToken);
  return await authGraphQLClient.request(createMessage, { input });

}