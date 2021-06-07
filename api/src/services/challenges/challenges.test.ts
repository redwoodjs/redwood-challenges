import { parseISO } from 'date-fns'
import {
  challenges,
  challenge,
  createChallenge,
  updateChallenge,
  deleteChallenge,
} from './challenges'

describe('challenges', () => {
  scenario('returns all challenges', async (scenario) => {
    const result = await challenges()

    expect(result.length).toEqual(Object.keys(scenario.challenge).length)
  })

  scenario('returns a single challenge', async (scenario) => {
    const result = await challenge({ id: scenario.challenge.one.id })

    expect(result).toEqual(scenario.challenge.one)
  })

  scenario('creates a challenge', async () => {
    const result = await createChallenge({
      input: {
        updatedAt: parseISO('2021-05-18T15:51:59Z'),
        name: 'String',
        description: 'String',
        slug: 'String7931432',
      },
    })

    expect(result.updatedAt).toEqual(parseISO('2021-05-18T15:51:59.000Z'))
    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.slug).toEqual('String7931432')
  })

  scenario('updates a challenge', async (scenario) => {
    const original = await challenge({ id: scenario.challenge.one.id })
    const result = await updateChallenge({
      id: original.id,
      input: { updatedAt: parseISO('2021-05-19T15:51:59Z') },
    })

    expect(result.updatedAt).toEqual(parseISO('2021-05-19T15:51:59.000Z'))
  })

  scenario('deletes a challenge', async (scenario) => {
    const original = await deleteChallenge({ id: scenario.challenge.one.id })
    const result = await challenge({ id: original.id })

    expect(result).toEqual(null)
  })
})
