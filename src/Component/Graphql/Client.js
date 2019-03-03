import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
    uri:'https://vstreamdemo.feedconstruct.com:8443/graphql',
});

