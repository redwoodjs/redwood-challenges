export const schema = gql`
  type Vote {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    entry: Entry!
    entryId: String!
  }

  type Query {
    votes: [Vote!]!
    vote(id: String!): Vote
  }

  input CreateVoteInput {
    entryId: String!
  }

  input UpdateVoteInput {
    entryId: String
  }

  type Mutation {
    createVote(input: CreateVoteInput!): Vote!
    updateVote(id: String!, input: UpdateVoteInput!): Vote!
    deleteVote(id: String!): Vote!
  }
`
