import { parseISO } from 'date-fns'

export const standard = defineScenario({
  vote: {
    one: {
      updatedAt: parseISO('2021-05-18T15:52:11Z'),
      entry: {
        create: {
          updatedAt: parseISO('2021-05-18T15:52:11Z'),
          approvedAt: parseISO('2021-05-18T15:52:11Z'),
          title: 'Entry title',
          description: 'Entry description',
          sha: '3510d715769410f0f2011e419e6d76c400a773f9',
          pullRequestHtmlUrl:
            'https://github.com/Codertocat/Hello-World/pull/2',
          pullRequestFilesUrl:
            'https://github.com/Codertocat/Hello-World/pull/2/files',
          user: { name: 'GH User 1', type: 'User' },
          username: 'GH User 1',
          content: { foo: 'bar' },
          challenge: {
            create: {
              updatedAt: parseISO('2021-05-18T15:52:11Z'),
              name: 'String',
              description: 'String',
              slug: 'String8672507',
            },
          },
        },
      },
    },
    two: {
      updatedAt: parseISO('2021-05-18T15:52:11Z'),
      entry: {
        create: {
          updatedAt: parseISO('2021-05-18T15:52:11Z'),
          approvedAt: parseISO('2021-05-18T15:52:11Z'),
          title: 'Entry title',
          description: 'Entry description',
          sha: '21a0d715769420f0f2011e419e6d76c400a773f2',
          pullRequestHtmlUrl:
            'https://github.com/Codertocat/Hello-World/pull/3',
          pullRequestFilesUrl:
            'https://github.com/Codertocat/Hello-World/pull/3/files',
          user: { name: 'GH User 2', type: 'User' },
          username: 'GH User 2',
          content: { foo: 'bar' },
          challenge: {
            create: {
              updatedAt: parseISO('2021-05-18T15:52:11Z'),
              name: 'String',
              description: 'String',
              slug: 'String857837',
            },
          },
        },
      },
    },
  },
})
