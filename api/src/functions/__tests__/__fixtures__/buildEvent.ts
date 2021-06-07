import type { APIGatewayProxyEvent, Context } from 'aws-lambda'

export const context = {} as Context

interface BuildEventParams extends Partial<APIGatewayProxyEvent> {
  payload?: string
  signature?: string
  signatureHeader?: string
}
// See: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/aws-lambda/trigger/api-gateway-proxy.d.ts
export const buildEvent = ({
  payload,
  signature,
  signatureHeader,
  queryStringParameters = null,
  httpMethod = 'GET',
  headers = {},
  path = '',
  isBase64Encoded = false,
  ...others
}: BuildEventParams): APIGatewayProxyEvent => {
  if (signature) {
    headers[signatureHeader.toLocaleLowerCase()] = signature
    headers['x-github-event'] = 'pull_request'
  }

  const body = isBase64Encoded
    ? Buffer.from(payload || '').toString('base64')
    : payload

  return {
    body,
    headers,
    multiValueHeaders: {},
    isBase64Encoded,
    path,
    pathParameters: null,
    stageVariables: null,
    httpMethod,
    queryStringParameters,
    requestContext: null,
    resource: null,
    multiValueQueryStringParameters: null,
    ...others,
  }
}

export const validOpenedPullRequest = {
  action: 'opened',
  number: 2,
  pull_request: {
    url: 'https://api.github.com/repos/Codertocat/Hello-World/pulls/2',
    id: 279147437,
    node_id: 'MDExOlB1bGxSZXF1ZXN0Mjc5MTQ3NDM3',
    html_url: 'https://github.com/Codertocat/Hello-World/pull/2',
    diff_url: 'https://github.com/Codertocat/Hello-World/pull/2.diff',
    patch_url: 'https://github.com/Codertocat/Hello-World/pull/2.patch',
    issue_url: 'https://api.github.com/repos/Codertocat/Hello-World/issues/2',
    number: 2,
    state: 'open',
    locked: false,
    title: 'Update the README with new information.',
    user: {
      login: 'Codertocat',
      id: 21031067,
      node_id: 'MDQ6VXNlcjIxMDMxMDY3',
      avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Codertocat',
      html_url: 'https://github.com/Codertocat',
      followers_url: 'https://api.github.com/users/Codertocat/followers',
      following_url:
        'https://api.github.com/users/Codertocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Codertocat/subscriptions',
      organizations_url: 'https://api.github.com/users/Codertocat/orgs',
      repos_url: 'https://api.github.com/users/Codertocat/repos',
      events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Codertocat/received_events',
      type: 'User',
      site_admin: false,
    },
    body: 'This is a pretty simple change that we need to pull into master.',
    created_at: '2019-05-15T15:20:33Z',
    updated_at: '2019-05-15T15:20:33Z',
    closed_at: null,
    merged_at: null,
    merge_commit_sha: null,
    assignee: null,
    assignees: [],
    requested_reviewers: [],
    requested_teams: [],
    labels: [],
    milestone: null,
    commits_url:
      'https://api.github.com/repos/Codertocat/Hello-World/pulls/2/commits',
    review_comments_url:
      'https://api.github.com/repos/Codertocat/Hello-World/pulls/2/comments',
    review_comment_url:
      'https://api.github.com/repos/Codertocat/Hello-World/pulls/comments{/number}',
    comments_url:
      'https://api.github.com/repos/Codertocat/Hello-World/issues/2/comments',
    statuses_url:
      'https://api.github.com/repos/Codertocat/Hello-World/statuses/ec26c3e57ca3a959ca5aad62de7213c562f8c821',
    head: {
      label: 'Codertocat:changes',
      ref: 'changes',
      sha: 'ec26c3e57ca3a959ca5aad62de7213c562f8c821',
      user: {
        login: 'Codertocat',
        id: 21031067,
        node_id: 'MDQ6VXNlcjIxMDMxMDY3',
        avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Codertocat',
        html_url: 'https://github.com/Codertocat',
        followers_url: 'https://api.github.com/users/Codertocat/followers',
        following_url:
          'https://api.github.com/users/Codertocat/following{/other_user}',
        gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/Codertocat/subscriptions',
        organizations_url: 'https://api.github.com/users/Codertocat/orgs',
        repos_url: 'https://api.github.com/users/Codertocat/repos',
        events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Codertocat/received_events',
        type: 'User',
        site_admin: false,
      },
      repo: {
        id: 186853002,
        node_id: 'MDEwOlJlcG9zaXRvcnkxODY4NTMwMDI=',
        name: 'Hello-World',
        full_name: 'Codertocat/Hello-World',
        private: false,
        owner: {
          login: 'Codertocat',
          id: 21031067,
          node_id: 'MDQ6VXNlcjIxMDMxMDY3',
          avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/Codertocat',
          html_url: 'https://github.com/Codertocat',
          followers_url: 'https://api.github.com/users/Codertocat/followers',
          following_url:
            'https://api.github.com/users/Codertocat/following{/other_user}',
          gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/Codertocat/subscriptions',
          organizations_url: 'https://api.github.com/users/Codertocat/orgs',
          repos_url: 'https://api.github.com/users/Codertocat/repos',
          events_url:
            'https://api.github.com/users/Codertocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/Codertocat/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/Codertocat/Hello-World',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/Codertocat/Hello-World',
        forks_url: 'https://api.github.com/repos/Codertocat/Hello-World/forks',
        keys_url:
          'https://api.github.com/repos/Codertocat/Hello-World/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/Codertocat/Hello-World/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/Codertocat/Hello-World/teams',
        hooks_url: 'https://api.github.com/repos/Codertocat/Hello-World/hooks',
        issue_events_url:
          'https://api.github.com/repos/Codertocat/Hello-World/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/Codertocat/Hello-World/events',
        assignees_url:
          'https://api.github.com/repos/Codertocat/Hello-World/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/Codertocat/Hello-World/branches{/branch}',
        tags_url: 'https://api.github.com/repos/Codertocat/Hello-World/tags',
        blobs_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/Codertocat/Hello-World/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/Codertocat/Hello-World/languages',
        stargazers_url:
          'https://api.github.com/repos/Codertocat/Hello-World/stargazers',
        contributors_url:
          'https://api.github.com/repos/Codertocat/Hello-World/contributors',
        subscribers_url:
          'https://api.github.com/repos/Codertocat/Hello-World/subscribers',
        subscription_url:
          'https://api.github.com/repos/Codertocat/Hello-World/subscription',
        commits_url:
          'https://api.github.com/repos/Codertocat/Hello-World/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/Codertocat/Hello-World/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/Codertocat/Hello-World/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/Codertocat/Hello-World/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/Codertocat/Hello-World/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/Codertocat/Hello-World/merges',
        archive_url:
          'https://api.github.com/repos/Codertocat/Hello-World/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/Codertocat/Hello-World/downloads',
        issues_url:
          'https://api.github.com/repos/Codertocat/Hello-World/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/Codertocat/Hello-World/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/Codertocat/Hello-World/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/Codertocat/Hello-World/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/Codertocat/Hello-World/labels{/name}',
        releases_url:
          'https://api.github.com/repos/Codertocat/Hello-World/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/Codertocat/Hello-World/deployments',
        created_at: '2019-05-15T15:19:25Z',
        updated_at: '2019-05-15T15:19:27Z',
        pushed_at: '2019-05-15T15:20:32Z',
        git_url: 'git://github.com/Codertocat/Hello-World.git',
        ssh_url: 'git@github.com:Codertocat/Hello-World.git',
        clone_url: 'https://github.com/Codertocat/Hello-World.git',
        svn_url: 'https://github.com/Codertocat/Hello-World',
        homepage: null,
        size: 0,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 2,
        license: null,
        forks: 0,
        open_issues: 2,
        watchers: 0,
        default_branch: 'master',
        allow_squash_merge: true,
        allow_merge_commit: true,
        allow_rebase_merge: true,
        delete_branch_on_merge: false,
      },
    },
    base: {
      label: 'Codertocat:master',
      ref: 'master',
      sha: 'f95f852bd8fca8fcc58a9a2d6c842781e32a215e',
      user: {
        login: 'Codertocat',
        id: 21031067,
        node_id: 'MDQ6VXNlcjIxMDMxMDY3',
        avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Codertocat',
        html_url: 'https://github.com/Codertocat',
        followers_url: 'https://api.github.com/users/Codertocat/followers',
        following_url:
          'https://api.github.com/users/Codertocat/following{/other_user}',
        gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/Codertocat/subscriptions',
        organizations_url: 'https://api.github.com/users/Codertocat/orgs',
        repos_url: 'https://api.github.com/users/Codertocat/repos',
        events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Codertocat/received_events',
        type: 'User',
        site_admin: false,
      },
      repo: {
        id: 186853002,
        node_id: 'MDEwOlJlcG9zaXRvcnkxODY4NTMwMDI=',
        name: 'Hello-World',
        full_name: 'Codertocat/Hello-World',
        private: false,
        owner: {
          login: 'Codertocat',
          id: 21031067,
          node_id: 'MDQ6VXNlcjIxMDMxMDY3',
          avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/Codertocat',
          html_url: 'https://github.com/Codertocat',
          followers_url: 'https://api.github.com/users/Codertocat/followers',
          following_url:
            'https://api.github.com/users/Codertocat/following{/other_user}',
          gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/Codertocat/subscriptions',
          organizations_url: 'https://api.github.com/users/Codertocat/orgs',
          repos_url: 'https://api.github.com/users/Codertocat/repos',
          events_url:
            'https://api.github.com/users/Codertocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/Codertocat/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/Codertocat/Hello-World',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/Codertocat/Hello-World',
        forks_url: 'https://api.github.com/repos/Codertocat/Hello-World/forks',
        keys_url:
          'https://api.github.com/repos/Codertocat/Hello-World/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/Codertocat/Hello-World/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/Codertocat/Hello-World/teams',
        hooks_url: 'https://api.github.com/repos/Codertocat/Hello-World/hooks',
        issue_events_url:
          'https://api.github.com/repos/Codertocat/Hello-World/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/Codertocat/Hello-World/events',
        assignees_url:
          'https://api.github.com/repos/Codertocat/Hello-World/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/Codertocat/Hello-World/branches{/branch}',
        tags_url: 'https://api.github.com/repos/Codertocat/Hello-World/tags',
        blobs_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/Codertocat/Hello-World/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/Codertocat/Hello-World/languages',
        stargazers_url:
          'https://api.github.com/repos/Codertocat/Hello-World/stargazers',
        contributors_url:
          'https://api.github.com/repos/Codertocat/Hello-World/contributors',
        subscribers_url:
          'https://api.github.com/repos/Codertocat/Hello-World/subscribers',
        subscription_url:
          'https://api.github.com/repos/Codertocat/Hello-World/subscription',
        commits_url:
          'https://api.github.com/repos/Codertocat/Hello-World/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/Codertocat/Hello-World/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/Codertocat/Hello-World/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/Codertocat/Hello-World/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/Codertocat/Hello-World/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/Codertocat/Hello-World/merges',
        archive_url:
          'https://api.github.com/repos/Codertocat/Hello-World/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/Codertocat/Hello-World/downloads',
        issues_url:
          'https://api.github.com/repos/Codertocat/Hello-World/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/Codertocat/Hello-World/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/Codertocat/Hello-World/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/Codertocat/Hello-World/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/Codertocat/Hello-World/labels{/name}',
        releases_url:
          'https://api.github.com/repos/Codertocat/Hello-World/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/Codertocat/Hello-World/deployments',
        created_at: '2019-05-15T15:19:25Z',
        updated_at: '2019-05-15T15:19:27Z',
        pushed_at: '2019-05-15T15:20:32Z',
        git_url: 'git://github.com/Codertocat/Hello-World.git',
        ssh_url: 'git@github.com:Codertocat/Hello-World.git',
        clone_url: 'https://github.com/Codertocat/Hello-World.git',
        svn_url: 'https://github.com/Codertocat/Hello-World',
        homepage: null,
        size: 0,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 2,
        license: null,
        forks: 0,
        open_issues: 2,
        watchers: 0,
        default_branch: 'master',
        allow_squash_merge: true,
        allow_merge_commit: true,
        allow_rebase_merge: true,
        delete_branch_on_merge: false,
      },
    },
    _links: {
      self: {
        href: 'https://api.github.com/repos/Codertocat/Hello-World/pulls/2',
      },
      html: {
        href: 'https://github.com/Codertocat/Hello-World/pull/2',
      },
      issue: {
        href: 'https://api.github.com/repos/Codertocat/Hello-World/issues/2',
      },
      comments: {
        href: 'https://api.github.com/repos/Codertocat/Hello-World/issues/2/comments',
      },
      review_comments: {
        href: 'https://api.github.com/repos/Codertocat/Hello-World/pulls/2/comments',
      },
      review_comment: {
        href: 'https://api.github.com/repos/Codertocat/Hello-World/pulls/comments{/number}',
      },
      commits: {
        href: 'https://api.github.com/repos/Codertocat/Hello-World/pulls/2/commits',
      },
      statuses: {
        href: 'https://api.github.com/repos/Codertocat/Hello-World/statuses/ec26c3e57ca3a959ca5aad62de7213c562f8c821',
      },
    },
    author_association: 'OWNER',
    draft: false,
    merged: false,
    mergeable: null,
    rebaseable: null,
    mergeable_state: 'unknown',
    merged_by: null,
    comments: 0,
    review_comments: 0,
    maintainer_can_modify: false,
    commits: 1,
    additions: 1,
    deletions: 1,
    changed_files: 1,
  },
  repository: {
    id: 186853002,
    node_id: 'MDEwOlJlcG9zaXRvcnkxODY4NTMwMDI=',
    name: 'Hello-World',
    full_name: 'Codertocat/Hello-World',
    private: false,
    owner: {
      login: 'Codertocat',
      id: 21031067,
      node_id: 'MDQ6VXNlcjIxMDMxMDY3',
      avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Codertocat',
      html_url: 'https://github.com/Codertocat',
      followers_url: 'https://api.github.com/users/Codertocat/followers',
      following_url:
        'https://api.github.com/users/Codertocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Codertocat/subscriptions',
      organizations_url: 'https://api.github.com/users/Codertocat/orgs',
      repos_url: 'https://api.github.com/users/Codertocat/repos',
      events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Codertocat/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/Codertocat/Hello-World',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/Codertocat/Hello-World',
    forks_url: 'https://api.github.com/repos/Codertocat/Hello-World/forks',
    keys_url:
      'https://api.github.com/repos/Codertocat/Hello-World/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Codertocat/Hello-World/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/Codertocat/Hello-World/teams',
    hooks_url: 'https://api.github.com/repos/Codertocat/Hello-World/hooks',
    issue_events_url:
      'https://api.github.com/repos/Codertocat/Hello-World/issues/events{/number}',
    events_url: 'https://api.github.com/repos/Codertocat/Hello-World/events',
    assignees_url:
      'https://api.github.com/repos/Codertocat/Hello-World/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Codertocat/Hello-World/branches{/branch}',
    tags_url: 'https://api.github.com/repos/Codertocat/Hello-World/tags',
    blobs_url:
      'https://api.github.com/repos/Codertocat/Hello-World/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Codertocat/Hello-World/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Codertocat/Hello-World/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Codertocat/Hello-World/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Codertocat/Hello-World/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Codertocat/Hello-World/languages',
    stargazers_url:
      'https://api.github.com/repos/Codertocat/Hello-World/stargazers',
    contributors_url:
      'https://api.github.com/repos/Codertocat/Hello-World/contributors',
    subscribers_url:
      'https://api.github.com/repos/Codertocat/Hello-World/subscribers',
    subscription_url:
      'https://api.github.com/repos/Codertocat/Hello-World/subscription',
    commits_url:
      'https://api.github.com/repos/Codertocat/Hello-World/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Codertocat/Hello-World/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Codertocat/Hello-World/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Codertocat/Hello-World/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Codertocat/Hello-World/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Codertocat/Hello-World/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/Codertocat/Hello-World/merges',
    archive_url:
      'https://api.github.com/repos/Codertocat/Hello-World/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Codertocat/Hello-World/downloads',
    issues_url:
      'https://api.github.com/repos/Codertocat/Hello-World/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Codertocat/Hello-World/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Codertocat/Hello-World/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Codertocat/Hello-World/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Codertocat/Hello-World/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Codertocat/Hello-World/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Codertocat/Hello-World/deployments',
    created_at: '2019-05-15T15:19:25Z',
    updated_at: '2019-05-15T15:19:27Z',
    pushed_at: '2019-05-15T15:20:32Z',
    git_url: 'git://github.com/Codertocat/Hello-World.git',
    ssh_url: 'git@github.com:Codertocat/Hello-World.git',
    clone_url: 'https://github.com/Codertocat/Hello-World.git',
    svn_url: 'https://github.com/Codertocat/Hello-World',
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 2,
    license: null,
    forks: 0,
    open_issues: 2,
    watchers: 0,
    default_branch: 'master',
  },
  sender: {
    login: 'Codertocat',
    id: 21031067,
    node_id: 'MDQ6VXNlcjIxMDMxMDY3',
    avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/Codertocat',
    html_url: 'https://github.com/Codertocat',
    followers_url: 'https://api.github.com/users/Codertocat/followers',
    following_url:
      'https://api.github.com/users/Codertocat/following{/other_user}',
    gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/Codertocat/subscriptions',
    organizations_url: 'https://api.github.com/users/Codertocat/orgs',
    repos_url: 'https://api.github.com/users/Codertocat/repos',
    events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/Codertocat/received_events',
    type: 'User',
    site_admin: false,
  },
}

export const validMergedPullRequest = {
  action: 'closed',
  number: 2,
  pull_request: {
    url: 'https://api.github.com/repos/Codertocat/Hello-World/pulls/2',
    id: 279147437,
    node_id: 'MDExOlB1bGxSZXF1ZXN0Mjc5MTQ3NDM3',
    html_url: 'https://github.com/Codertocat/Hello-World/pull/2',
    diff_url: 'https://github.com/Codertocat/Hello-World/pull/2.diff',
    patch_url: 'https://github.com/Codertocat/Hello-World/pull/2.patch',
    issue_url: 'https://api.github.com/repos/Codertocat/Hello-World/issues/2',
    number: 2,
    state: 'open',
    locked: false,
    title: 'This is my entry for the splash page challenge.',
    user: {
      login: 'Codertocat',
      id: 21031067,
      node_id: 'MDQ6VXNlcjIxMDMxMDY3',
      avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Codertocat',
      html_url: 'https://github.com/Codertocat',
      followers_url: 'https://api.github.com/users/Codertocat/followers',
      following_url:
        'https://api.github.com/users/Codertocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Codertocat/subscriptions',
      organizations_url: 'https://api.github.com/users/Codertocat/orgs',
      repos_url: 'https://api.github.com/users/Codertocat/repos',
      events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Codertocat/received_events',
      type: 'User',
      site_admin: false,
    },
    body: 'This splash page is sure to make a splash.',
    created_at: '2019-05-15T15:20:33Z',
    updated_at: '2019-05-15T15:20:33Z',
    closed_at: '2019-05-15T15:20:33Z',
    merged_at: '2019-05-15T15:20:33Z',
    merge_commit_sha: null,
    assignee: null,
    assignees: [],
    requested_reviewers: [],
    requested_teams: [],
    labels: [
      {
        id: 3030324891,
        url: 'https://api.github.com/repos/dthyresson/redwood-webhook-test/labels/challenge:splash-page',
        name: 'challenge:splash-page',
        color: 'E765D3',
        default: false,
        node_id: 'MDU6TGFiZWwzMDMwMzI0ODkx',
        description: 'Splash Page Challenge',
      },
    ],
    milestone: null,
    commits_url:
      'https://api.github.com/repos/Codertocat/Hello-World/pulls/2/commits',
    review_comments_url:
      'https://api.github.com/repos/Codertocat/Hello-World/pulls/2/comments',
    review_comment_url:
      'https://api.github.com/repos/Codertocat/Hello-World/pulls/comments{/number}',
    comments_url:
      'https://api.github.com/repos/Codertocat/Hello-World/issues/2/comments',
    statuses_url:
      'https://api.github.com/repos/Codertocat/Hello-World/statuses/ec26c3e57ca3a959ca5aad62de7213c562f8c821',
    head: {
      label: 'Codertocat:changes',
      ref: 'changes',
      sha: 'ec26c3e57ca3a959ca5aad62de7213c562f8c821',
      user: {
        login: 'Codertocat',
        id: 21031067,
        node_id: 'MDQ6VXNlcjIxMDMxMDY3',
        avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Codertocat',
        html_url: 'https://github.com/Codertocat',
        followers_url: 'https://api.github.com/users/Codertocat/followers',
        following_url:
          'https://api.github.com/users/Codertocat/following{/other_user}',
        gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/Codertocat/subscriptions',
        organizations_url: 'https://api.github.com/users/Codertocat/orgs',
        repos_url: 'https://api.github.com/users/Codertocat/repos',
        events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Codertocat/received_events',
        type: 'User',
        site_admin: false,
      },
      repo: {
        id: 186853002,
        node_id: 'MDEwOlJlcG9zaXRvcnkxODY4NTMwMDI=',
        name: 'Hello-World',
        full_name: 'Codertocat/Hello-World',
        private: false,
        owner: {
          login: 'Codertocat',
          id: 21031067,
          node_id: 'MDQ6VXNlcjIxMDMxMDY3',
          avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/Codertocat',
          html_url: 'https://github.com/Codertocat',
          followers_url: 'https://api.github.com/users/Codertocat/followers',
          following_url:
            'https://api.github.com/users/Codertocat/following{/other_user}',
          gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/Codertocat/subscriptions',
          organizations_url: 'https://api.github.com/users/Codertocat/orgs',
          repos_url: 'https://api.github.com/users/Codertocat/repos',
          events_url:
            'https://api.github.com/users/Codertocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/Codertocat/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/Codertocat/Hello-World',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/Codertocat/Hello-World',
        forks_url: 'https://api.github.com/repos/Codertocat/Hello-World/forks',
        keys_url:
          'https://api.github.com/repos/Codertocat/Hello-World/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/Codertocat/Hello-World/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/Codertocat/Hello-World/teams',
        hooks_url: 'https://api.github.com/repos/Codertocat/Hello-World/hooks',
        issue_events_url:
          'https://api.github.com/repos/Codertocat/Hello-World/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/Codertocat/Hello-World/events',
        assignees_url:
          'https://api.github.com/repos/Codertocat/Hello-World/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/Codertocat/Hello-World/branches{/branch}',
        tags_url: 'https://api.github.com/repos/Codertocat/Hello-World/tags',
        blobs_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/Codertocat/Hello-World/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/Codertocat/Hello-World/languages',
        stargazers_url:
          'https://api.github.com/repos/Codertocat/Hello-World/stargazers',
        contributors_url:
          'https://api.github.com/repos/Codertocat/Hello-World/contributors',
        subscribers_url:
          'https://api.github.com/repos/Codertocat/Hello-World/subscribers',
        subscription_url:
          'https://api.github.com/repos/Codertocat/Hello-World/subscription',
        commits_url:
          'https://api.github.com/repos/Codertocat/Hello-World/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/Codertocat/Hello-World/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/Codertocat/Hello-World/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/Codertocat/Hello-World/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/Codertocat/Hello-World/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/Codertocat/Hello-World/merges',
        archive_url:
          'https://api.github.com/repos/Codertocat/Hello-World/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/Codertocat/Hello-World/downloads',
        issues_url:
          'https://api.github.com/repos/Codertocat/Hello-World/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/Codertocat/Hello-World/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/Codertocat/Hello-World/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/Codertocat/Hello-World/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/Codertocat/Hello-World/labels{/name}',
        releases_url:
          'https://api.github.com/repos/Codertocat/Hello-World/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/Codertocat/Hello-World/deployments',
        created_at: '2019-05-15T15:19:25Z',
        updated_at: '2019-05-15T15:19:27Z',
        pushed_at: '2019-05-15T15:20:32Z',
        git_url: 'git://github.com/Codertocat/Hello-World.git',
        ssh_url: 'git@github.com:Codertocat/Hello-World.git',
        clone_url: 'https://github.com/Codertocat/Hello-World.git',
        svn_url: 'https://github.com/Codertocat/Hello-World',
        homepage: null,
        size: 0,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 2,
        license: null,
        forks: 0,
        open_issues: 2,
        watchers: 0,
        default_branch: 'master',
        allow_squash_merge: true,
        allow_merge_commit: true,
        allow_rebase_merge: true,
        delete_branch_on_merge: false,
      },
    },
    base: {
      label: 'Codertocat:master',
      ref: 'master',
      sha: 'f95f852bd8fca8fcc58a9a2d6c842781e32a215e',
      user: {
        login: 'Codertocat',
        id: 21031067,
        node_id: 'MDQ6VXNlcjIxMDMxMDY3',
        avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Codertocat',
        html_url: 'https://github.com/Codertocat',
        followers_url: 'https://api.github.com/users/Codertocat/followers',
        following_url:
          'https://api.github.com/users/Codertocat/following{/other_user}',
        gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/Codertocat/subscriptions',
        organizations_url: 'https://api.github.com/users/Codertocat/orgs',
        repos_url: 'https://api.github.com/users/Codertocat/repos',
        events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Codertocat/received_events',
        type: 'User',
        site_admin: false,
      },
      repo: {
        id: 186853002,
        node_id: 'MDEwOlJlcG9zaXRvcnkxODY4NTMwMDI=',
        name: 'Hello-World',
        full_name: 'Codertocat/Hello-World',
        private: false,
        owner: {
          login: 'Codertocat',
          id: 21031067,
          node_id: 'MDQ6VXNlcjIxMDMxMDY3',
          avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/Codertocat',
          html_url: 'https://github.com/Codertocat',
          followers_url: 'https://api.github.com/users/Codertocat/followers',
          following_url:
            'https://api.github.com/users/Codertocat/following{/other_user}',
          gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/Codertocat/subscriptions',
          organizations_url: 'https://api.github.com/users/Codertocat/orgs',
          repos_url: 'https://api.github.com/users/Codertocat/repos',
          events_url:
            'https://api.github.com/users/Codertocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/Codertocat/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/Codertocat/Hello-World',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/Codertocat/Hello-World',
        forks_url: 'https://api.github.com/repos/Codertocat/Hello-World/forks',
        keys_url:
          'https://api.github.com/repos/Codertocat/Hello-World/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/Codertocat/Hello-World/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/Codertocat/Hello-World/teams',
        hooks_url: 'https://api.github.com/repos/Codertocat/Hello-World/hooks',
        issue_events_url:
          'https://api.github.com/repos/Codertocat/Hello-World/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/Codertocat/Hello-World/events',
        assignees_url:
          'https://api.github.com/repos/Codertocat/Hello-World/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/Codertocat/Hello-World/branches{/branch}',
        tags_url: 'https://api.github.com/repos/Codertocat/Hello-World/tags',
        blobs_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/Codertocat/Hello-World/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/Codertocat/Hello-World/languages',
        stargazers_url:
          'https://api.github.com/repos/Codertocat/Hello-World/stargazers',
        contributors_url:
          'https://api.github.com/repos/Codertocat/Hello-World/contributors',
        subscribers_url:
          'https://api.github.com/repos/Codertocat/Hello-World/subscribers',
        subscription_url:
          'https://api.github.com/repos/Codertocat/Hello-World/subscription',
        commits_url:
          'https://api.github.com/repos/Codertocat/Hello-World/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/Codertocat/Hello-World/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/Codertocat/Hello-World/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/Codertocat/Hello-World/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/Codertocat/Hello-World/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/Codertocat/Hello-World/merges',
        archive_url:
          'https://api.github.com/repos/Codertocat/Hello-World/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/Codertocat/Hello-World/downloads',
        issues_url:
          'https://api.github.com/repos/Codertocat/Hello-World/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/Codertocat/Hello-World/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/Codertocat/Hello-World/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/Codertocat/Hello-World/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/Codertocat/Hello-World/labels{/name}',
        releases_url:
          'https://api.github.com/repos/Codertocat/Hello-World/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/Codertocat/Hello-World/deployments',
        created_at: '2019-05-15T15:19:25Z',
        updated_at: '2019-05-15T15:19:27Z',
        pushed_at: '2019-05-15T15:20:32Z',
        git_url: 'git://github.com/Codertocat/Hello-World.git',
        ssh_url: 'git@github.com:Codertocat/Hello-World.git',
        clone_url: 'https://github.com/Codertocat/Hello-World.git',
        svn_url: 'https://github.com/Codertocat/Hello-World',
        homepage: null,
        size: 0,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 2,
        license: null,
        forks: 0,
        open_issues: 2,
        watchers: 0,
        default_branch: 'master',
        allow_squash_merge: true,
        allow_merge_commit: true,
        allow_rebase_merge: true,
        delete_branch_on_merge: false,
      },
    },
    _links: {
      self: {
        href: 'https://api.github.com/repos/Codertocat/Hello-World/pulls/2',
      },
      html: {
        href: 'https://github.com/Codertocat/Hello-World/pull/2',
      },
      issue: {
        href: 'https://api.github.com/repos/Codertocat/Hello-World/issues/2',
      },
      comments: {
        href: 'https://api.github.com/repos/Codertocat/Hello-World/issues/2/comments',
      },
      review_comments: {
        href: 'https://api.github.com/repos/Codertocat/Hello-World/pulls/2/comments',
      },
      review_comment: {
        href: 'https://api.github.com/repos/Codertocat/Hello-World/pulls/comments{/number}',
      },
      commits: {
        href: 'https://api.github.com/repos/Codertocat/Hello-World/pulls/2/commits',
      },
      statuses: {
        href: 'https://api.github.com/repos/Codertocat/Hello-World/statuses/ec26c3e57ca3a959ca5aad62de7213c562f8c821',
      },
    },
    author_association: 'OWNER',
    draft: false,
    merged: true,
    mergeable: null,
    rebaseable: null,
    mergeable_state: 'unknown',
    merged_by: null,
    comments: 0,
    review_comments: 0,
    maintainer_can_modify: false,
    commits: 1,
    additions: 1,
    deletions: 1,
    changed_files: 1,
  },
  repository: {
    id: 186853002,
    node_id: 'MDEwOlJlcG9zaXRvcnkxODY4NTMwMDI=',
    name: 'Hello-World',
    full_name: 'Codertocat/Hello-World',
    private: false,
    owner: {
      login: 'Codertocat',
      id: 21031067,
      node_id: 'MDQ6VXNlcjIxMDMxMDY3',
      avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Codertocat',
      html_url: 'https://github.com/Codertocat',
      followers_url: 'https://api.github.com/users/Codertocat/followers',
      following_url:
        'https://api.github.com/users/Codertocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Codertocat/subscriptions',
      organizations_url: 'https://api.github.com/users/Codertocat/orgs',
      repos_url: 'https://api.github.com/users/Codertocat/repos',
      events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Codertocat/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/Codertocat/Hello-World',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/Codertocat/Hello-World',
    forks_url: 'https://api.github.com/repos/Codertocat/Hello-World/forks',
    keys_url:
      'https://api.github.com/repos/Codertocat/Hello-World/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Codertocat/Hello-World/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/Codertocat/Hello-World/teams',
    hooks_url: 'https://api.github.com/repos/Codertocat/Hello-World/hooks',
    issue_events_url:
      'https://api.github.com/repos/Codertocat/Hello-World/issues/events{/number}',
    events_url: 'https://api.github.com/repos/Codertocat/Hello-World/events',
    assignees_url:
      'https://api.github.com/repos/Codertocat/Hello-World/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Codertocat/Hello-World/branches{/branch}',
    tags_url: 'https://api.github.com/repos/Codertocat/Hello-World/tags',
    blobs_url:
      'https://api.github.com/repos/Codertocat/Hello-World/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Codertocat/Hello-World/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Codertocat/Hello-World/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Codertocat/Hello-World/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Codertocat/Hello-World/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Codertocat/Hello-World/languages',
    stargazers_url:
      'https://api.github.com/repos/Codertocat/Hello-World/stargazers',
    contributors_url:
      'https://api.github.com/repos/Codertocat/Hello-World/contributors',
    subscribers_url:
      'https://api.github.com/repos/Codertocat/Hello-World/subscribers',
    subscription_url:
      'https://api.github.com/repos/Codertocat/Hello-World/subscription',
    commits_url:
      'https://api.github.com/repos/Codertocat/Hello-World/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Codertocat/Hello-World/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Codertocat/Hello-World/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Codertocat/Hello-World/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Codertocat/Hello-World/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Codertocat/Hello-World/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/Codertocat/Hello-World/merges',
    archive_url:
      'https://api.github.com/repos/Codertocat/Hello-World/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Codertocat/Hello-World/downloads',
    issues_url:
      'https://api.github.com/repos/Codertocat/Hello-World/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Codertocat/Hello-World/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Codertocat/Hello-World/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Codertocat/Hello-World/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Codertocat/Hello-World/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Codertocat/Hello-World/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Codertocat/Hello-World/deployments',
    created_at: '2019-05-15T15:19:25Z',
    updated_at: '2019-05-15T15:19:27Z',
    pushed_at: '2019-05-15T15:20:32Z',
    git_url: 'git://github.com/Codertocat/Hello-World.git',
    ssh_url: 'git@github.com:Codertocat/Hello-World.git',
    clone_url: 'https://github.com/Codertocat/Hello-World.git',
    svn_url: 'https://github.com/Codertocat/Hello-World',
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 2,
    license: null,
    forks: 0,
    open_issues: 2,
    watchers: 0,
    default_branch: 'master',
  },
  sender: {
    login: 'Codertocat',
    id: 21031067,
    node_id: 'MDQ6VXNlcjIxMDMxMDY3',
    avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/Codertocat',
    html_url: 'https://github.com/Codertocat',
    followers_url: 'https://api.github.com/users/Codertocat/followers',
    following_url:
      'https://api.github.com/users/Codertocat/following{/other_user}',
    gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/Codertocat/subscriptions',
    organizations_url: 'https://api.github.com/users/Codertocat/orgs',
    repos_url: 'https://api.github.com/users/Codertocat/repos',
    events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/Codertocat/received_events',
    type: 'User',
    site_admin: false,
  },
}

export const realWorldMergedPullRequest = {
  action: 'closed',
  number: 2,
  pull_request: {
    id: 655183151,
    url: 'https://api.github.com/repos/dthyresson/redwood-webhook-test/pulls/4',
    base: {
      ref: 'main',
      sha: 'f6f1cd5cff774c62555b2d50b03bd68b0ec16e6e',
      repo: {
        id: 368953999,
        url: 'https://api.github.com/repos/dthyresson/redwood-webhook-test',
        fork: false,
        name: 'redwood-webhook-test',
        size: 2,
        forks: 0,
        owner: {
          id: 1051633,
          url: 'https://api.github.com/users/dthyresson',
          type: 'User',
          login: 'dthyresson',
          node_id: 'MDQ6VXNlcjEwNTE2MzM=',
          html_url: 'https://github.com/dthyresson',
          gists_url: 'https://api.github.com/users/dthyresson/gists{/gist_id}',
          repos_url: 'https://api.github.com/users/dthyresson/repos',
          avatar_url: 'https://avatars.githubusercontent.com/u/1051633?v=4',
          events_url:
            'https://api.github.com/users/dthyresson/events{/privacy}',
          site_admin: false,
          gravatar_id: '',
          starred_url:
            'https://api.github.com/users/dthyresson/starred{/owner}{/repo}',
          followers_url: 'https://api.github.com/users/dthyresson/followers',
          following_url:
            'https://api.github.com/users/dthyresson/following{/other_user}',
          organizations_url: 'https://api.github.com/users/dthyresson/orgs',
          subscriptions_url:
            'https://api.github.com/users/dthyresson/subscriptions',
          received_events_url:
            'https://api.github.com/users/dthyresson/received_events',
        },
        git_url: 'git://github.com/dthyresson/redwood-webhook-test.git',
        license: null,
        node_id: 'MDEwOlJlcG9zaXRvcnkzNjg5NTM5OTk=',
        private: false,
        ssh_url: 'git@github.com:dthyresson/redwood-webhook-test.git',
        svn_url: 'https://github.com/dthyresson/redwood-webhook-test',
        archived: false,
        disabled: false,
        has_wiki: true,
        homepage: '',
        html_url: 'https://github.com/dthyresson/redwood-webhook-test',
        keys_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/keys{/key_id}',
        language: 'HTML',
        tags_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/tags',
        watchers: 0,
        blobs_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/git/blobs{/sha}',
        clone_url: 'https://github.com/dthyresson/redwood-webhook-test.git',
        forks_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/forks',
        full_name: 'dthyresson/redwood-webhook-test',
        has_pages: false,
        hooks_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/hooks',
        pulls_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/pulls{/number}',
        pushed_at: '2021-05-27T16:55:10Z',
        teams_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/teams',
        trees_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/git/trees{/sha}',
        created_at: '2021-05-19T17:45:07Z',
        events_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/events',
        has_issues: true,
        issues_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/issues{/number}',
        labels_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/labels{/name}',
        merges_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/merges',
        mirror_url: null,
        updated_at: '2021-05-27T16:17:46Z',
        archive_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/{archive_format}{/ref}',
        commits_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/commits{/sha}',
        compare_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/compare/{base}...{head}',
        description:
          'Test repo to send GitHub webhooks to the Redwood API webhook handler',
        forks_count: 0,
        open_issues: 0,
        branches_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/branches{/branch}',
        comments_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/comments{/number}',
        contents_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/contents/{+path}',
        git_refs_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/git/refs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/git/tags{/sha}',
        has_projects: true,
        releases_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/releases{/id}',
        statuses_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/statuses/{sha}',
        assignees_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/assignees{/user}',
        downloads_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/downloads',
        has_downloads: true,
        languages_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/languages',
        default_branch: 'main',
        milestones_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/milestones{/number}',
        stargazers_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/stargazers',
        watchers_count: 0,
        deployments_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/deployments',
        git_commits_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/git/commits{/sha}',
        subscribers_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/subscribers',
        contributors_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/contributors',
        issue_events_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/issues/events{/number}',
        stargazers_count: 0,
        subscription_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/subscription',
        collaborators_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/collaborators{/collaborator}',
        issue_comment_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/issues/comments{/number}',
        notifications_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/notifications{?since,all,participating}',
        open_issues_count: 0,
        allow_merge_commit: true,
        allow_rebase_merge: true,
        allow_squash_merge: true,
        delete_branch_on_merge: false,
      },
      user: {
        id: 1051633,
        url: 'https://api.github.com/users/dthyresson',
        type: 'User',
        login: 'dthyresson',
        node_id: 'MDQ6VXNlcjEwNTE2MzM=',
        html_url: 'https://github.com/dthyresson',
        gists_url: 'https://api.github.com/users/dthyresson/gists{/gist_id}',
        repos_url: 'https://api.github.com/users/dthyresson/repos',
        avatar_url: 'https://avatars.githubusercontent.com/u/1051633?v=4',
        events_url: 'https://api.github.com/users/dthyresson/events{/privacy}',
        site_admin: false,
        gravatar_id: '',
        starred_url:
          'https://api.github.com/users/dthyresson/starred{/owner}{/repo}',
        followers_url: 'https://api.github.com/users/dthyresson/followers',
        following_url:
          'https://api.github.com/users/dthyresson/following{/other_user}',
        organizations_url: 'https://api.github.com/users/dthyresson/orgs',
        subscriptions_url:
          'https://api.github.com/users/dthyresson/subscriptions',
        received_events_url:
          'https://api.github.com/users/dthyresson/received_events',
      },
      label: 'dthyresson:main',
    },
    body: 'This is my pitch for why my page is the best.',
    head: {
      ref: 'dt-splash-demo',
      sha: '72f1954fe7a6f6effa6f90e88d8ed60fc0f92533',
      repo: {
        id: 368953999,
        url: 'https://api.github.com/repos/dthyresson/redwood-webhook-test',
        fork: false,
        name: 'redwood-webhook-test',
        size: 2,
        forks: 0,
        owner: {
          id: 1051633,
          url: 'https://api.github.com/users/dthyresson',
          type: 'User',
          login: 'dthyresson',
          node_id: 'MDQ6VXNlcjEwNTE2MzM=',
          html_url: 'https://github.com/dthyresson',
          gists_url: 'https://api.github.com/users/dthyresson/gists{/gist_id}',
          repos_url: 'https://api.github.com/users/dthyresson/repos',
          avatar_url: 'https://avatars.githubusercontent.com/u/1051633?v=4',
          events_url:
            'https://api.github.com/users/dthyresson/events{/privacy}',
          site_admin: false,
          gravatar_id: '',
          starred_url:
            'https://api.github.com/users/dthyresson/starred{/owner}{/repo}',
          followers_url: 'https://api.github.com/users/dthyresson/followers',
          following_url:
            'https://api.github.com/users/dthyresson/following{/other_user}',
          organizations_url: 'https://api.github.com/users/dthyresson/orgs',
          subscriptions_url:
            'https://api.github.com/users/dthyresson/subscriptions',
          received_events_url:
            'https://api.github.com/users/dthyresson/received_events',
        },
        git_url: 'git://github.com/dthyresson/redwood-webhook-test.git',
        license: null,
        node_id: 'MDEwOlJlcG9zaXRvcnkzNjg5NTM5OTk=',
        private: false,
        ssh_url: 'git@github.com:dthyresson/redwood-webhook-test.git',
        svn_url: 'https://github.com/dthyresson/redwood-webhook-test',
        archived: false,
        disabled: false,
        has_wiki: true,
        homepage: '',
        html_url: 'https://github.com/dthyresson/redwood-webhook-test',
        keys_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/keys{/key_id}',
        language: 'HTML',
        tags_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/tags',
        watchers: 0,
        blobs_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/git/blobs{/sha}',
        clone_url: 'https://github.com/dthyresson/redwood-webhook-test.git',
        forks_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/forks',
        full_name: 'dthyresson/redwood-webhook-test',
        has_pages: false,
        hooks_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/hooks',
        pulls_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/pulls{/number}',
        pushed_at: '2021-05-27T16:55:10Z',
        teams_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/teams',
        trees_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/git/trees{/sha}',
        created_at: '2021-05-19T17:45:07Z',
        events_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/events',
        has_issues: true,
        issues_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/issues{/number}',
        labels_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/labels{/name}',
        merges_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/merges',
        mirror_url: null,
        updated_at: '2021-05-27T16:17:46Z',
        archive_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/{archive_format}{/ref}',
        commits_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/commits{/sha}',
        compare_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/compare/{base}...{head}',
        description:
          'Test repo to send GitHub webhooks to the Redwood API webhook handler',
        forks_count: 0,
        open_issues: 0,
        branches_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/branches{/branch}',
        comments_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/comments{/number}',
        contents_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/contents/{+path}',
        git_refs_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/git/refs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/git/tags{/sha}',
        has_projects: true,
        releases_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/releases{/id}',
        statuses_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/statuses/{sha}',
        assignees_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/assignees{/user}',
        downloads_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/downloads',
        has_downloads: true,
        languages_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/languages',
        default_branch: 'main',
        milestones_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/milestones{/number}',
        stargazers_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/stargazers',
        watchers_count: 0,
        deployments_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/deployments',
        git_commits_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/git/commits{/sha}',
        subscribers_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/subscribers',
        contributors_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/contributors',
        issue_events_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/issues/events{/number}',
        stargazers_count: 0,
        subscription_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/subscription',
        collaborators_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/collaborators{/collaborator}',
        issue_comment_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/issues/comments{/number}',
        notifications_url:
          'https://api.github.com/repos/dthyresson/redwood-webhook-test/notifications{?since,all,participating}',
        open_issues_count: 0,
        allow_merge_commit: true,
        allow_rebase_merge: true,
        allow_squash_merge: true,
        delete_branch_on_merge: false,
      },
      user: {
        id: 1051633,
        url: 'https://api.github.com/users/dthyresson',
        type: 'User',
        login: 'dthyresson',
        node_id: 'MDQ6VXNlcjEwNTE2MzM=',
        html_url: 'https://github.com/dthyresson',
        gists_url: 'https://api.github.com/users/dthyresson/gists{/gist_id}',
        repos_url: 'https://api.github.com/users/dthyresson/repos',
        avatar_url: 'https://avatars.githubusercontent.com/u/1051633?v=4',
        events_url: 'https://api.github.com/users/dthyresson/events{/privacy}',
        site_admin: false,
        gravatar_id: '',
        starred_url:
          'https://api.github.com/users/dthyresson/starred{/owner}{/repo}',
        followers_url: 'https://api.github.com/users/dthyresson/followers',
        following_url:
          'https://api.github.com/users/dthyresson/following{/other_user}',
        organizations_url: 'https://api.github.com/users/dthyresson/orgs',
        subscriptions_url:
          'https://api.github.com/users/dthyresson/subscriptions',
        received_events_url:
          'https://api.github.com/users/dthyresson/received_events',
      },
      label: 'dthyresson:dt-splash-demo',
    },
    user: {
      id: 1051633,
      url: 'https://api.github.com/users/dthyresson',
      type: 'User',
      login: 'dthyresson',
      node_id: 'MDQ6VXNlcjEwNTE2MzM=',
      html_url: 'https://github.com/dthyresson',
      gists_url: 'https://api.github.com/users/dthyresson/gists{/gist_id}',
      repos_url: 'https://api.github.com/users/dthyresson/repos',
      avatar_url: 'https://avatars.githubusercontent.com/u/1051633?v=4',
      events_url: 'https://api.github.com/users/dthyresson/events{/privacy}',
      site_admin: false,
      gravatar_id: '',
      starred_url:
        'https://api.github.com/users/dthyresson/starred{/owner}{/repo}',
      followers_url: 'https://api.github.com/users/dthyresson/followers',
      following_url:
        'https://api.github.com/users/dthyresson/following{/other_user}',
      organizations_url: 'https://api.github.com/users/dthyresson/orgs',
      subscriptions_url:
        'https://api.github.com/users/dthyresson/subscriptions',
      received_events_url:
        'https://api.github.com/users/dthyresson/received_events',
    },
    draft: false,
    state: 'closed',
    title: 'Strong splash demo',
    _links: {
      html: {
        href: 'https://github.com/dthyresson/redwood-webhook-test/pull/4',
      },
      self: {
        href: 'https://api.github.com/repos/dthyresson/redwood-webhook-test/pulls/4',
      },
      issue: {
        href: 'https://api.github.com/repos/dthyresson/redwood-webhook-test/issues/4',
      },
      commits: {
        href: 'https://api.github.com/repos/dthyresson/redwood-webhook-test/pulls/4/commits',
      },
      comments: {
        href: 'https://api.github.com/repos/dthyresson/redwood-webhook-test/issues/4/comments',
      },
      statuses: {
        href: 'https://api.github.com/repos/dthyresson/redwood-webhook-test/statuses/72f1954fe7a6f6effa6f90e88d8ed60fc0f92533',
      },
      review_comment: {
        href: 'https://api.github.com/repos/dthyresson/redwood-webhook-test/pulls/comments{/number}',
      },
      review_comments: {
        href: 'https://api.github.com/repos/dthyresson/redwood-webhook-test/pulls/4/comments',
      },
    },
    labels: [
      {
        id: 3030324891,
        url: 'https://api.github.com/repos/dthyresson/redwood-webhook-test/labels/challenge:splash-page',
        name: 'challenge:splash-page',
        color: 'E765D3',
        default: false,
        node_id: 'MDU6TGFiZWwzMDMwMzI0ODkx',
        description: 'Splash Page Challenge',
      },
    ],
    locked: false,
    merged: true,
    number: 4,
    commits: 1,
    node_id: 'MDExOlB1bGxSZXF1ZXN0NjU1MTgzMTUx',
    assignee: null,
    comments: 1,
    diff_url: 'https://github.com/dthyresson/redwood-webhook-test/pull/4.diff',
    html_url: 'https://github.com/dthyresson/redwood-webhook-test/pull/4',
    additions: 6,
    assignees: [],
    closed_at: '2021-05-27T16:55:10Z',
    deletions: 0,
    issue_url:
      'https://api.github.com/repos/dthyresson/redwood-webhook-test/issues/4',
    mergeable: null,
    merged_at: '2021-05-27T16:55:10Z',
    merged_by: {
      id: 1051633,
      url: 'https://api.github.com/users/dthyresson',
      type: 'User',
      login: 'dthyresson',
      node_id: 'MDQ6VXNlcjEwNTE2MzM=',
      html_url: 'https://github.com/dthyresson',
      gists_url: 'https://api.github.com/users/dthyresson/gists{/gist_id}',
      repos_url: 'https://api.github.com/users/dthyresson/repos',
      avatar_url: 'https://avatars.githubusercontent.com/u/1051633?v=4',
      events_url: 'https://api.github.com/users/dthyresson/events{/privacy}',
      site_admin: false,
      gravatar_id: '',
      starred_url:
        'https://api.github.com/users/dthyresson/starred{/owner}{/repo}',
      followers_url: 'https://api.github.com/users/dthyresson/followers',
      following_url:
        'https://api.github.com/users/dthyresson/following{/other_user}',
      organizations_url: 'https://api.github.com/users/dthyresson/orgs',
      subscriptions_url:
        'https://api.github.com/users/dthyresson/subscriptions',
      received_events_url:
        'https://api.github.com/users/dthyresson/received_events',
    },
    milestone: null,
    patch_url:
      'https://github.com/dthyresson/redwood-webhook-test/pull/4.patch',
    auto_merge: null,
    created_at: '2021-05-27T16:54:22Z',
    rebaseable: null,
    updated_at: '2021-05-27T16:55:10Z',
    commits_url:
      'https://api.github.com/repos/dthyresson/redwood-webhook-test/pulls/4/commits',
    comments_url:
      'https://api.github.com/repos/dthyresson/redwood-webhook-test/issues/4/comments',
    statuses_url:
      'https://api.github.com/repos/dthyresson/redwood-webhook-test/statuses/72f1954fe7a6f6effa6f90e88d8ed60fc0f92533',
    changed_files: 1,
    mergeable_state: 'unknown',
    requested_teams: [],
    review_comments: 0,
    merge_commit_sha: 'd0afa65d16a9ef6c60ea28b51cf2a1c3c3e62fbb',
    active_lock_reason: null,
    author_association: 'OWNER',
    review_comment_url:
      'https://api.github.com/repos/dthyresson/redwood-webhook-test/pulls/comments{/number}',
    requested_reviewers: [],
    review_comments_url:
      'https://api.github.com/repos/dthyresson/redwood-webhook-test/pulls/4/comments',
    maintainer_can_modify: false,
  },
}

export const splashDemoThursday = {
  name: 'splash-demo-thursday.html',
  path: 'challenges/splash-demo-thursday.html',
  sha: '908554d790269ae6e1223e6a421759558a306fae',
  size: 122,
  url: 'https://api.github.com/repos/dthyresson/redwood-webhook-test/contents/challenges/splash-demo-thursday.html?ref=72f1954fe7a6f6effa6f90e88d8ed60fc0f92533',
  html_url:
    'https://github.com/dthyresson/redwood-webhook-test/blob/72f1954fe7a6f6effa6f90e88d8ed60fc0f92533/challenges/splash-demo-thursday.html',
  git_url:
    'https://api.github.com/repos/dthyresson/redwood-webhook-test/git/blobs/908554d790269ae6e1223e6a421759558a306fae',
  download_url:
    'https://raw.githubusercontent.com/dthyresson/redwood-webhook-test/72f1954fe7a6f6effa6f90e88d8ed60fc0f92533/challenges/splash-demo-thursday.html',
  type: 'file',
  content:
    'PGh0bWw+CiAgICA8Ym9keT4KICAgICAgICA8aDE+V2VsY29tZSB0byBSZWR3\n' +
    'b29kSlM8L2gxPgogICAgICAgIDxwPlRoaXMgaXMgYSA8c3Ryb25nPnBhZ2U8\n' +
    'L3N0cm9uZz48L3A+CiAgICA8L2JvZHk+CjwvaHRtbD4=\n',
  encoding: 'base64',
  _links: {
    self: 'https://api.github.com/repos/dthyresson/redwood-webhook-test/contents/challenges/splash-demo-thursday.html?ref=72f1954fe7a6f6effa6f90e88d8ed60fc0f92533',
    git: 'https://api.github.com/repos/dthyresson/redwood-webhook-test/git/blobs/908554d790269ae6e1223e6a421759558a306fae',
    html: 'https://github.com/dthyresson/redwood-webhook-test/blob/72f1954fe7a6f6effa6f90e88d8ed60fc0f92533/challenges/splash-demo-thursday.html',
  },
}
