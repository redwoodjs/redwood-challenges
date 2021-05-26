import { parseISO } from 'date-fns'
import { votes, vote, createVote, updateVote, deleteVote } from './votes'
import { createEntry } from '../entries/entries'

describe('votes', () => {
  scenario('returns all votes', async (scenario) => {
    const result = await votes()

    expect(result.length).toEqual(Object.keys(scenario.vote).length)
  })

  scenario('returns a single vote', async (scenario) => {
    const result = await vote({ id: scenario.vote.one.id })

    expect(result).toEqual(scenario.vote.one)
  })

  scenario('creates a vote', async (scenario) => {
    const entry = await createEntry({
      input: {
        updatedAt: parseISO('2021-05-18T15:52:03Z'),
        approvedAt: parseISO('2021-05-18T15:52:11Z'),
        uid: 'CADxOlB1bGxBAAF1ZXN1NjUyNDQwNjZz',
        sha: '21a0d715769420f0f2011e419e6d76c400a773f2',
        title: 'Entry title',
        description: 'Entry description',
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

    const result = await createVote({
      input: {
        updatedAt: parseISO('2021-05-18T15:52:11Z'),
        entry: { connect: { id: entry.id } },
      },
    })

    expect(result.updatedAt).toEqual(parseISO('2021-05-18T15:52:11Z'))
    expect(result.entryId).toEqual(entry.id)
  })

  scenario('updates a vote', async (scenario) => {
    const original = await vote({ id: scenario.vote.one.id })
    const result = await updateVote({
      id: original.id,
      input: { updatedAt: parseISO('2021-05-19T15:52:11Z') },
    })

    expect(result.updatedAt).toEqual(parseISO('2021-05-19T15:52:11Z'))
  })

  scenario('deletes a vote', async (scenario) => {
    const original = await deleteVote({ id: scenario.vote.one.id })
    const result = await vote({ id: original.id })

    expect(result).toEqual(null)
  })
})
