import { parseISO } from 'date-fns'
import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.EntryCreateArgs>({
  entry: {
    one: {
      id: 'find-my-by-id-one',
      updatedAt: parseISO('2021-05-18T15:52:03Z'),
      approvedAt: parseISO('2021-05-18T15:52:11Z'),
      uid: 'akdfblrbqldlqwudbyubqeb',
      sha: '21a0d715769420f0f2011e419e6d76c400a773f2',
      title: 'Entry title',
      description: 'Entry description',
      pullRequestHtmlUrl: 'https://github.com/Codertocat/Hello-World/pull/2',
      raw: { foo: 'bar' },
      content: `PGh0bWw+CiAgICA8Ym9keT4KICAgICAgICA8aDE+V2VsY29tZSB0byBSZWR3
        b29kSlM8L2gxPgogICAgICAgIDxwPlRoaXMgaXMgYSA8c3Ryb25nPnBhZ2U8
        L3N0cm9uZz48L3A+CiAgICA8L2JvZHk+CjwvaHRtbD4=`,
      pullRequestFilesUrl:
        'https://github.com/Codertocat/Hello-World/pull/3/files',
      pullRequestFiles: [
        {
          sha: '908554d790269ae6e1223e6a421759558a306fae',
          patch:
            '@@ -0,0 +1,6 @@\n+<html>\n+    <body>\n+        <h1>Welcome to RedwoodJS</h1>\n+        <p>This is a <strong>page</strong></p>\n+    </body>\n+</html>\n\\ No newline at end of file',
          status: 'added',
          changes: 6,
          raw_url:
            'https://github.com/dthyresson/redwood-webhook-test/raw/72f1954fe7a6f6effa6f90e88d8ed60fc0f92533/challenges/splash-demo-thursday.html',
          blob_url:
            'https://github.com/dthyresson/redwood-webhook-test/blob/72f1954fe7a6f6effa6f90e88d8ed60fc0f92533/challenges/splash-demo-thursday.html',
          filename: 'challenges/splash-demo-thursday.html',
          additions: 6,
          deletions: 0,
          contents_url:
            'https://api.github.com/repos/dthyresson/redwood-webhook-test/contents/challenges/splash-demo-thursday.html?ref=72f1954fe7a6f6effa6f90e88d8ed60fc0f92533',
        },
      ],
      fileUrl:
        'https://api.github.com/repos/dthyresson/redwood-webhook-test/contents/challenges/splash-demo-thursday.html?ref=72f1954fe7a6f6effa6f90e88d8ed60fc0f92533',

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
      raw: { foo: 'bar' },
      content: `PGh0bWw+CiAgICA8Ym9keT4KICAgICAgICA8aDE+V2VsY29tZSB0byBSZWR3
        b29kSlM8L2gxPgogICAgICAgIDxwPlRoaXMgaXMgYSA8c3Ryb25nPnBhZ2U8
        L3N0cm9uZz48L3A+CiAgICA8L2JvZHk+CjwvaHRtbD4=`,
      pullRequestFilesUrl:
        'https://github.com/Codertocat/Hello-World/pull/3/files',
      pullRequestFiles: [
        {
          sha: '908554d790269ae6e1223e6a421759558a306fae',
          patch:
            '@@ -0,0 +1,6 @@\n+<html>\n+    <body>\n+        <h1>Welcome to RedwoodJS</h1>\n+        <p>This is a <strong>page</strong></p>\n+    </body>\n+</html>\n\\ No newline at end of file',
          status: 'added',
          changes: 6,
          raw_url:
            'https://github.com/dthyresson/redwood-webhook-test/raw/72f1954fe7a6f6effa6f90e88d8ed60fc0f92533/challenges/splash-demo-thursday.html',
          blob_url:
            'https://github.com/dthyresson/redwood-webhook-test/blob/72f1954fe7a6f6effa6f90e88d8ed60fc0f92533/challenges/splash-demo-thursday.html',
          filename: 'challenges/splash-demo-thursday.html',
          additions: 6,
          deletions: 0,
          contents_url:
            'https://api.github.com/repos/dthyresson/redwood-webhook-test/contents/challenges/splash-demo-thursday.html?ref=72f1954fe7a6f6effa6f90e88d8ed60fc0f92533',
        },
      ],
      fileUrl:
        'https://api.github.com/repos/dthyresson/redwood-webhook-test/contents/challenges/splash-demo-thursday.html?ref=72f1954fe7a6f6effa6f90e88d8ed60fc0f92533',
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
