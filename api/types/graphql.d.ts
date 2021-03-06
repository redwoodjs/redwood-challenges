import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Challenge: ResolverTypeWrapper<Challenge>;
  String: ResolverTypeWrapper<Scalars['String']>;
  CreateChallengeInput: CreateChallengeInput;
  CreateEntryInput: CreateEntryInput;
  CreateVoteInput: CreateVoteInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Entry: ResolverTypeWrapper<Entry>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Redwood: ResolverTypeWrapper<Redwood>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  UpdateChallengeInput: UpdateChallengeInput;
  UpdateEntryInput: UpdateEntryInput;
  UpdateVoteInput: UpdateVoteInput;
  Vote: ResolverTypeWrapper<Vote>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Challenge: Challenge;
  String: Scalars['String'];
  CreateChallengeInput: CreateChallengeInput;
  CreateEntryInput: CreateEntryInput;
  CreateVoteInput: CreateVoteInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Entry: Entry;
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  Mutation: {};
  Query: {};
  Redwood: Redwood;
  Time: Scalars['Time'];
  UpdateChallengeInput: UpdateChallengeInput;
  UpdateEntryInput: UpdateEntryInput;
  UpdateVoteInput: UpdateVoteInput;
  Vote: Vote;
  Boolean: Scalars['Boolean'];
};

export type ChallengeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Challenge'] = ResolversParentTypes['Challenge']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  beginsAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  endsAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entries?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type EntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entry'] = ResolversParentTypes['Entry']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  approvedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  challenge?: Resolver<ResolversTypes['Challenge'], ParentType, ContextType>;
  challengeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sha?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pullRequestFilesUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pullRequestHtmlUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  raw?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  pullRequestFiles?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  fileUrls?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  fileUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  votes?: Resolver<Array<Maybe<ResolversTypes['Vote']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createChallenge?: Resolver<ResolversTypes['Challenge'], ParentType, ContextType, RequireFields<MutationCreateChallengeArgs, 'input'>>;
  createEntry?: Resolver<ResolversTypes['Entry'], ParentType, ContextType, RequireFields<MutationCreateEntryArgs, 'input'>>;
  createVote?: Resolver<ResolversTypes['Vote'], ParentType, ContextType, RequireFields<MutationCreateVoteArgs, 'input'>>;
  deleteChallenge?: Resolver<ResolversTypes['Challenge'], ParentType, ContextType, RequireFields<MutationDeleteChallengeArgs, 'id'>>;
  deleteEntry?: Resolver<ResolversTypes['Entry'], ParentType, ContextType, RequireFields<MutationDeleteEntryArgs, 'id'>>;
  deleteVote?: Resolver<ResolversTypes['Vote'], ParentType, ContextType, RequireFields<MutationDeleteVoteArgs, 'id'>>;
  updateChallenge?: Resolver<ResolversTypes['Challenge'], ParentType, ContextType, RequireFields<MutationUpdateChallengeArgs, 'id' | 'input'>>;
  updateEntry?: Resolver<ResolversTypes['Entry'], ParentType, ContextType, RequireFields<MutationUpdateEntryArgs, 'id' | 'input'>>;
  updateVote?: Resolver<ResolversTypes['Vote'], ParentType, ContextType, RequireFields<MutationUpdateVoteArgs, 'id' | 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  challenge?: Resolver<Maybe<ResolversTypes['Challenge']>, ParentType, ContextType, RequireFields<QueryChallengeArgs, 'id'>>;
  challenges?: Resolver<Array<ResolversTypes['Challenge']>, ParentType, ContextType>;
  decodedEntryContent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryDecodedEntryContentArgs, 'id'>>;
  entries?: Resolver<Array<ResolversTypes['Entry']>, ParentType, ContextType>;
  entry?: Resolver<Maybe<ResolversTypes['Entry']>, ParentType, ContextType, RequireFields<QueryEntryArgs, 'id'>>;
  redwood?: Resolver<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
  vote?: Resolver<Maybe<ResolversTypes['Vote']>, ParentType, ContextType, RequireFields<QueryVoteArgs, 'id'>>;
  votes?: Resolver<Array<ResolversTypes['Vote']>, ParentType, ContextType>;
};

export type RedwoodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type VoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vote'] = ResolversParentTypes['Vote']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  entry?: Resolver<ResolversTypes['Entry'], ParentType, ContextType>;
  entryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Challenge?: ChallengeResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Entry?: EntryResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Redwood?: RedwoodResolvers<ContextType>;
  Time?: GraphQLScalarType;
  Vote?: VoteResolvers<ContextType>;
};

