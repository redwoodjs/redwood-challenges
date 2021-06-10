import type { EntriesQuery } from 'types/gql-types'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query EntriesQuery {
    entries {
      id
      title
      description
      username
      content
      fileUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ entries }: CellSuccessProps<EntriesQuery>) => {
  return (
    <div>
      {entries.map((entry) => {
        return (
          <div key={entry.id}>
            <p>{entry.id}</p>

            <iframe
              title={entry.title}
              src={`${process.env.SITE_URL}/entryHtml?id=${entry.id}`}
              height="100%"
              width="100%"
            ></iframe>
          </div>
        )
      })}
    </div>
  )
}
