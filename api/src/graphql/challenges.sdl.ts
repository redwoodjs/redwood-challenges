export const schema = gql`
  type Challenge {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    beginsAt: DateTime
    endsAt: DateTime
    name: String!
    description: String!
    slug: String!
    entries: [Entry]!
  }

  type Query {
    challenges: [Challenge!]!
    challenge(id: String!): Challenge
  }

  input CreateChallengeInput {
    beginsAt: DateTime
    endsAt: DateTime
    name: String!
    description: String!
    slug: String!
  }

  input UpdateChallengeInput {
    beginsAt: DateTime
    endsAt: DateTime
    name: String
    description: String
    slug: String
  }

  type Mutation {
    createChallenge(input: CreateChallengeInput!): Challenge!
    updateChallenge(id: String!, input: UpdateChallengeInput!): Challenge!
    deleteChallenge(id: String!): Challenge!
  }
`
