import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RICKANDMORTYGQL } from "../constants";

export const GraphQLClient = new ApolloClient({
  uri: RICKANDMORTYGQL,
  cache: new InMemoryCache(),
});
