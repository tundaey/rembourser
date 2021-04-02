import { gql } from 'apollo-server-lambda';

export const typeDefs = gql`
  type Query {
    testMessage: String!
  }

  type File {
    uri: String!
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Mutation {
    uploadReceipt: String!
    uploadAvatar(file: Upload!): File
  }
`