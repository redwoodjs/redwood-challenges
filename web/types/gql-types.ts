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
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: Record<string, unknown>;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: Record<string, unknown>;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
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
  updateChallenge: Challenge;
  deleteChallenge: Challenge;
  createEntry: Entry;
  updateEntry: Entry;
  deleteEntry: Entry;
  createVote: Vote;
  updateVote: Vote;
  deleteVote: Vote;
};


export type MutationCreateChallengeArgs = {
  input: CreateChallengeInput;
};


export type MutationUpdateChallengeArgs = {
  id: Scalars['String'];
  input: UpdateChallengeInput;
};


export type MutationDeleteChallengeArgs = {
  id: Scalars['String'];
};


export type MutationCreateEntryArgs = {
  input: CreateEntryInput;
};


export type MutationUpdateEntryArgs = {
  id: Scalars['String'];
  input: UpdateEntryInput;
};


export type MutationDeleteEntryArgs = {
  id: Scalars['String'];
};


export type MutationCreateVoteArgs = {
  input: CreateVoteInput;
};


export type MutationUpdateVoteArgs = {
  id: Scalars['String'];
  input: UpdateVoteInput;
};


export type MutationDeleteVoteArgs = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  redwood?: Maybe<Redwood>;
  challenges: Array<Challenge>;
  challenge?: Maybe<Challenge>;
  entries: Array<Entry>;
  entry?: Maybe<Entry>;
  votes: Array<Vote>;
  vote?: Maybe<Vote>;
};


export type QueryChallengeArgs = {
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


export type ChallengesQuery = (
  { __typename?: 'Query' }
  & { challenges: Array<(
    { __typename?: 'Challenge' }
    & Pick<Challenge, 'id' | 'name'>
  )> }
);

export type EntriesQueryVariables = Exact<{ [key: string]: never; }>;


export type EntriesQuery = (
  { __typename?: 'Query' }
  & { entries: Array<(
    { __typename?: 'Entry' }
    & Pick<Entry, 'id' | 'title' | 'description' | 'username' | 'content' | 'fileUrl'>
  )> }
);
