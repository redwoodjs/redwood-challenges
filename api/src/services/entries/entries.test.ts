import { parseISO } from 'date-fns'

import {
  entries,
  entry,
  createEntry,
  updateEntry,
  deleteEntry,
} from './entries'

describe('entries', () => {
  scenario('returns all entries', async (scenario) => {
    const result = await entries()

    expect(result.length).toEqual(Object.keys(scenario.entry).length)
  })

  scenario('returns a single entry', async (scenario) => {
    const result = await entry({ id: scenario.entry.one.id })

    expect(result).toEqual(scenario.entry.one)
  })

  scenario('creates a entry', async (scenario) => {
    const result = await createEntry({
      input: {
        updatedAt: parseISO('2021-05-18T15:52:03Z'),
        approvedAt: parseISO('2021-05-18T15:52:11Z'),
        title: 'Entry title',
        description: 'Entry description',
        sha: '21a0d715769420f0f2011e419e6d76c400a773f2',
        pullRequestHtmlUrl: 'https://github.com/Codertocat/Hello-World/pull/2',
        pullRequestFilesUrl:
          'https://github.com/Codertocat/Hello-World/pull/2/files',
        user: { name: 'GH User 1', type: 'User' },
        username: 'GH User 1',
        challenge: {
          create: {
            name: 'scenario.entry.two.challengeId',
            description: 'scenario.entry.two.challengeId',
            slug: 'scenario.entry.two.challengeId',
          },
        },
        content: { foo: 'bar' },
      },
    })

    expect(result.updatedAt).toEqual(parseISO('2021-05-18T15:52:03Z'))
    expect(result.content).toEqual({ foo: 'bar' })
  })

  scenario('updates a entry', async (scenario) => {
    const original = await entry({ id: scenario.entry.one.id })
    const result = await updateEntry({
      id: original.id,
      input: { updatedAt: parseISO('2021-05-19T15:52:03Z') },
    })

    expect(result.updatedAt).toEqual(parseISO('2021-05-19T15:52:03Z'))
  })

  scenario('deletes a entry', async (scenario) => {
    const original = await deleteEntry({ id: scenario.entry.one.id })
    const result = await entry({ id: original.id })

    expect(result).toEqual(null)
  })
})
