import type { ChallengesQuery } from 'types/gql-types'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query ChallengesQuery {
    challenges {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading... ..</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ challenges }: CellSuccessProps<ChallengesQuery>) => {
  return (
    <ul>
      {challenges.map((item) => {
        return <li key={item.id}>{item.name}</li>
      })}
    </ul>
  )
}
