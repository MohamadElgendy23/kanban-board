import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

export const client = new ApolloClient({
  link: createHttpLink({
    uri: process.env.NHOST_GRAPHQL_URL,
    headers: {
      "x-hasura-admin-secret": "KP0nW88iF966)$@Iw'JB_p3_&zuYT5(M",
    },
  }),
  cache: new InMemoryCache(),
});
