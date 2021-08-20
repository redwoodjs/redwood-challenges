export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};

export type Challenge = {
  __typename?: 'Challenge';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  beginsAt?: Maybe<Scalars['DateTime']>;
  endsAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description: Scalars['String'];
  slug: Scalars['String'];
  entries: Array<Maybe<Entry>>;
};

export type CreateChallengeInput = {
  beginsAt?: Maybe<Scalars['DateTime']>;
  endsAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description: Scalars['String'];
  slug: Scalars['String'];
};

export type CreateEntryInput = {
  approvedAt: Scalars['DateTime'];
  challengeId: Scalars['String'];
  uid: Scalars['String'];
  sha: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  pullRequestFilesUrl: Scalars['String'];
  pullRequestHtmlUrl: Scalars['String'];
  username: Scalars['String'];
  user: Scalars['JSON'];
  raw: Scalars['JSON'];
  pullRequestFiles?: Maybe<Scalars['JSON']>;
  fileUrls: Array<Maybe<Scalars['String']>>;
  fileUrl?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type CreateVoteInput = {
  entryId: Scalars['String'];
};



export type Entry = {
  __typename?: 'Entry';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  approvedAt: Scalars['DateTime'];
  challenge: Challenge;
  challengeId: Scalars['String'];
  uid: Scalars['String'];
  sha: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  pullRequestFilesUrl: Scalars['String'];
  pullRequestHtmlUrl: Scalars['String'];
  username: Scalars['String'];
  user: Scalars['JSON'];
  raw: Scalars['JSON'];
  pullRequestFiles?: Maybe<Scalars['JSON']>;
  fileUrls: Array<Maybe<Scalars['String']>>;
  fileUrl?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  votes: Array<Maybe<Vote>>;
};



export type Mutation = {
  __typename?: 'Mutation';
  createChallenge: Challenge;
  createEntry: Entry;
  createVote: Vote;
  deleteChallenge: Challenge;
  deleteEntry: Entry;
  deleteVote: Vote;
  updateChallenge: Challenge;
  updateEntry: Entry;
  updateVote: Vote;
};


export type MutationCreateChallengeArgs = {
  input: CreateChallengeInput;
};


export type MutationCreateEntryArgs = {
  input: CreateEntryInput;
};


export type MutationCreateVoteArgs = {
  input: CreateVoteInput;
};


export type MutationDeleteChallengeArgs = {
  id: Scalars['String'];
};


export type MutationDeleteEntryArgs = {
  id: Scalars['String'];
};


export type MutationDeleteVoteArgs = {
  id: Scalars['String'];
};


export type MutationUpdateChallengeArgs = {
  id: Scalars['String'];
  input: UpdateChallengeInput;
};


export type MutationUpdateEntryArgs = {
  id: Scalars['String'];
  input: UpdateEntryInput;
};


export type MutationUpdateVoteArgs = {
  id: Scalars['String'];
  input: UpdateVoteInput;
};

export type Query = {
  __typename?: 'Query';
  challenge?: Maybe<Challenge>;
  challenges: Array<Challenge>;
  decodedEntryContent?: Maybe<Scalars['String']>;
  entries: Array<Entry>;
  entry?: Maybe<Entry>;
  redwood?: Maybe<Redwood>;
  vote?: Maybe<Vote>;
  votes: Array<Vote>;
};


export type QueryChallengeArgs = {
  id: Scalars['String'];
};


export type QueryDecodedEntryContentArgs = {
  id: Scalars['String'];
};


export type QueryEntryArgs = {
  id: Scalars['String'];
};


export type QueryVoteArgs = {
  id: Scalars['String'];
};

export type Redwood = {
  __typename?: 'Redwood';
  version?: Maybe<Scalars['String']>;
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
};


export type UpdateChallengeInput = {
  beginsAt?: Maybe<Scalars['DateTime']>;
  endsAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type UpdateEntryInput = {
  approvedAt?: Maybe<Scalars['DateTime']>;
  challengeId?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  sha?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  pullRequestFilesUrl?: Maybe<Scalars['String']>;
  pullRequestHtmlUrl?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['JSON']>;
  raw?: Maybe<Scalars['JSON']>;
  pullRequestFiles?: Maybe<Scalars['JSON']>;
  fileUrls: Array<Maybe<Scalars['String']>>;
  fileUrl?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type UpdateVoteInput = {
  entryId?: Maybe<Scalars['String']>;
};

export type Vote = {
  __typename?: 'Vote';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  entry: Entry;
  entryId: Scalars['String'];
};

export type ChallengesQueryVariables = Exact<{ [key: string]: never; }>;


export type ChallengesQuery = { __typename?: 'Query', challenges: Array<{ __typename?: 'Challenge', id: string, name: string }> };

export type EntriesQueryVariables = Exact<{ [key: string]: never; }>;


export type EntriesQuery = { __typename?: 'Query', entries: Array<{ __typename?: 'Entry', id: string, title: string, description: string, username: string, content?: Maybe<string>, fileUrl?: Maybe<string> }> };
