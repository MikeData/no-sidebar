import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: 'http://localhost:8080/wordpress/graphql',
  cache: new InMemoryCache(),
});
export default client;