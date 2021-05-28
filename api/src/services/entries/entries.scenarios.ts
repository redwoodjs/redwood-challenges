import { parseISO } from 'date-fns'

export const standard = defineScenario({
  entry: {
    one: {
      updatedAt: parseISO('2021-05-18T15:52:03Z'),
      approvedAt: parseISO('2021-05-18T15:52:11Z'),
      uid: 'akdfblrbqldlqwudbyubqeb',
      sha: '21a0d715769420f0f2011e419e6d76c400a773f2',
      title: 'Entry title',
      description: 'Entry description',
      pullRequestHtmlUrl: 'https://github.com/Codertocat/Hello-World/pull/2',
      pullRequestFilesUrl:
        'https://github.com/Codertocat/Hello-World/pull/2/files',
      raw: { foo: 'bar' },
      user: { name: 'GH User 1', type: 'User' },
      username: 'GH User 1',
      challenge: {
        create: {
          updatedAt: parseISO('2021-05-18T15:52:03Z'),
          name: 'String',
          description: 'String',
          slug: 'String7255268',
        },
      },
    },
    two: {
      updatedAt: parseISO('2021-05-18T15:52:03Z'),
      approvedAt: parseISO('2021-05-18T15:52:11Z'),
      uid: '23nwnfiusndfi23urlwf',
      sha: '11b0d715769420a0f2011b413e6d76c412a873c9',
      title: 'Entry title',
      description: 'Entry description',
      pullRequestHtmlUrl: 'https://github.com/Codertocat/Hello-World/pull/3',
      pullRequestFilesUrl:
        'https://github.com/Codertocat/Hello-World/pull/3/files',
      raw: { foo: 'bar' },
      user: { name: 'GH User 2', type: 'User' },
      username: 'GH User 2',
      challenge: {
        create: {
          updatedAt: parseISO('2021-05-18T15:52:03Z'),
          name: 'Redwood Page Challenge',
          description: 'Design new redwoodJS pages',
          slug: 'redwood-page',
        },
      },
    },
  },
})
