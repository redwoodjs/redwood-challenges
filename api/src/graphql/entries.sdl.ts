export const schema = gql`
  type Entry {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    approvedAt: DateTime!
    challenge: Challenge!
    challengeId: String!
    uid: String!
    sha: String!
    title: String!
    description: String!
    pullRequestFilesUrl: String!
    pullRequestHtmlUrl: String!
    username: String!
    user: JSON!
    raw: JSON!
    pullRequestFiles: JSON
    fileUrls: [String]!
    fileUrl: String
    content: String
    votes: [Vote]!
  }

  type Query {
    entries: [Entry!]!
    entry(id: String!): Entry
    decodedEntryContent(id: String!): String
  }

  input CreateEntryInput {
    approvedAt: DateTime!
    challengeId: String!
    uid: String!
    sha: String!
    title: String!
    description: String!
    pullRequestFilesUrl: String!
    pullRequestHtmlUrl: String!
    username: String!
    user: JSON!
    raw: JSON!
    pullRequestFiles: JSON
    fileUrls: [String]!
    fileUrl: String
    content: String
  }

  input UpdateEntryInput {
    approvedAt: DateTime
    challengeId: String
    uid: String
    sha: String
    title: String
    description: String
    pullRequestFilesUrl: String
    pullRequestHtmlUrl: String
    username: String
    user: JSON
    raw: JSON
    pullRequestFiles: JSON
    fileUrls: [String]!
    fileUrl: String
    content: String
  }

  type Mutation {
    createEntry(input: CreateEntryInput!): Entry!
    updateEntry(id: String!, input: UpdateEntryInput!): Entry!
    deleteEntry(id: String!): Entry!
  }
`
