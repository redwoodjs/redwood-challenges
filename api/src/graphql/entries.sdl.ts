export const schema = gql`
  type Entry {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    challenge: Challenge!
    challengeId: String!
    content: JSON!
    votes: [Vote]!
  }

  type Query {
    entries: [Entry!]!
    entry(id: String!): Entry
  }

  input CreateEntryInput {
    challengeId: String!
    content: JSON!
  }

  input UpdateEntryInput {
    challengeId: String
    content: JSON
  }

  type Mutation {
    createEntry(input: CreateEntryInput!): Entry!
    updateEntry(id: String!, input: UpdateEntryInput!): Entry!
    deleteEntry(id: String!): Entry!
  }
`
