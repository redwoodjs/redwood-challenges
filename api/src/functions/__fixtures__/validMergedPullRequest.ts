export const validMergedPullRequest = {
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
