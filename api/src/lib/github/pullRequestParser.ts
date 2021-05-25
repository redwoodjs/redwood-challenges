import { parseISO } from 'date-fns'
import { logger } from 'src/lib/logger'

type GitHubLabel = {
  id: string
  node_id: string
  url: string
  name: string
  color: string
  default: boolean
  description: string
}

/*
 * Extracts all labels from PR beginning with `challenge:<name>` and returns a list of names
 *
 * @param pullRequest - A GitHub pull request json payload from webhook
 * @returns string[] - List of challenge names
 */
const parseChallenges = ({ pullRequest }): string[] | [] => {
  return (
    parseLabels({ pullRequest })?.map((label: GitHubLabel) => {
      const tokens = label?.name.split(':')
      if (tokens[0] === 'challenge') {
        return tokens[1]
      }
    }) || []
  )
}

/*
 * Extracts challenges names from PR labels and returns first named challenge
 * This challenge determines the 's challenge
 *
 * @param pullRequest - A GitHub pull request json payload from webhook
 * @returns string - First named challenge
 */
const parseChallenge = ({ pullRequest }): string | undefined => {
  const challenges = parseChallenges({ pullRequest })
  return challenges[0]
}

/*
 * Extracts PR labels
 * @param pullRequest - A GitHub pull request json payload from webhook
 * @returns string[] - The PR labels
 */
const parseLabels = ({ pullRequest }): [] | GitHubLabel[] | undefined => {
  return pullRequest.labels as GitHubLabel[]
}

const approvedAt = ({ pullRequest }) => {
  try {
    if (pullRequest.merged_at) {
      return parseISO(pullRequest.merged_at)
    } else {
      return null
    }
  } catch {
    logger.warn('Unable to convert PR merged_at to timestamp')
    return null
  }
}

/*
 * Determines if the payload pull request can be processed based on its action and merged status.
 * If the action is closed and the merged key is true, the pull request was merged.
 *
 * @see https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request
 *
 * @param pullRequest - A GitHub webhook payload
 * @returns boolean - If the pull request was merged then it is valid to be processed
 */
const isValid = ({ payload }) => {
  const pullRequest = payload.pull_request

  if (payload === undefined) {
    logger.warn('Payload is not a Pull Request')
    return false
  }

  const valid = payload.action === 'closed' && pullRequest.merged
  return valid
}

/*
 * Extracts PR labels
 * @param pullRequest - A GitHub pull request json payload from webhook
 * @returns {} - The information extracted from the GitHib Pull Request payload needed to process the challenge entry
 *
 * @see https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#webhook-payload-example-32
 *
 */
export const parse = ({ payload }) => {
  const pullRequest = payload.pull_request

  return {
    action: payload.action,
    title: pullRequest.title,
    description: pullRequest.body,
    htmlUrl: pullRequest.html_url,
    filesUrl: `${pullRequest.html_url}/files`,
    labels: parseLabels({ pullRequest }),
    merged: pullRequest.merged,
    approvedAt: approvedAt({ pullRequest }),
    isValid: isValid({ payload }),
    challenge: parseChallenge({ pullRequest }),
    sha: pullRequest.head?.sha,
    user: pullRequest.user,
    username: pullRequest.user?.login,
    content: pullRequest,
  }
}
