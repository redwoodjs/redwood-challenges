import { parseISO } from 'date-fns'
import { validPullRequest } from './__fixtures__'
import { parse } from '../pullRequestParser'
import { logger } from 'src/lib/logger'

describe('webhookHelper', () => {
  describe('when given a valid GitHub webhook payload', () => {
    it('detects the action', async () => {
      const payload = validPullRequest
      const parsed = parse({ payload })

      expect(parsed).toHaveProperty('action', 'closed')
    })

    it('detects the merged state', async () => {
      const payload = validPullRequest
      const parsed = parse({ payload })

      expect(parsed).toHaveProperty('merged', true)
    })

    it('detects the approvedAt timestamp from the merged at value', async () => {
      const payload = validPullRequest
      const parsed = parse({ payload })
      logger.debug(parsed.approvedAt)
      expect(parsed).toHaveProperty(
        'approvedAt',
        parseISO('2019-05-15T15:20:33.000Z')
      )
    })

    it('detects the pull request title', async () => {
      const payload = validPullRequest
      const parsed = parse({ payload })

      expect(parsed).toHaveProperty(
        'title',
        'This is my entry for the splash page challenge.'
      )
    })

    it('detects the pull request description', async () => {
      const payload = validPullRequest
      const parsed = parse({ payload })

      expect(parsed).toHaveProperty(
        'description',
        'This splash page is sure to make a splash.'
      )
    })

    it('determines the if the entry is valid to be saved', async () => {
      const payload = validPullRequest
      const parsed = parse({ payload })

      expect(parsed).toHaveProperty('isValid', true)
    })

    it('detects the labels', async () => {
      const payload = validPullRequest
      const parsed = parse({ payload })

      expect(parsed).toHaveProperty('labels')
      expect(parsed.labels).toHaveLength(1)
      expect(parsed.labels[0]).toHaveProperty('name', 'challenge:splash-page')
    })

    it('sets the challenge', async () => {
      const payload = validPullRequest
      const parsed = parse({ payload })

      expect(parsed).toHaveProperty('challenge', 'splash-page')
    })

    it('sets the htmlUrl', async () => {
      const payload = validPullRequest
      const parsed = parse({ payload })

      expect(parsed).toHaveProperty(
        'htmlUrl',
        'https://github.com/Codertocat/Hello-World/pull/2'
      )
    })

    it('sets the filesUrl', async () => {
      const payload = validPullRequest
      const parsed = parse({ payload })

      expect(parsed).toHaveProperty(
        'filesUrl',
        'https://api.github.com/repos/Codertocat/Hello-World/pulls/2/files'
      )
    })

    it('sets the user', async () => {
      const payload = validPullRequest
      const parsed = parse({ payload })

      expect(parsed).toHaveProperty('user')
      expect(parsed.user).toHaveProperty('type', 'User')
      expect(parsed.user).toHaveProperty('login', 'Codertocat')
    })

    it('sets the username', async () => {
      const payload = validPullRequest
      const parsed = parse({ payload })

      expect(parsed).toHaveProperty('username', 'Codertocat')
    })

    it('sets the PR uid from node_id', async () => {
      const payload = validPullRequest
      const parsed = parse({ payload })

      expect(parsed).toHaveProperty('uid', 'MDExOlB1bGxSZXF1ZXN0Mjc5MTQ3NDM3')
    })

    it('sets the PR sha', async () => {
      const payload = validPullRequest
      const parsed = parse({ payload })

      expect(parsed).toHaveProperty(
        'sha',
        'ec26c3e57ca3a959ca5aad62de7213c562f8c821'
      )
    })
  })
})
