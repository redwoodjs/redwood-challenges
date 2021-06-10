import { render } from '@redwoodjs/testing'
import { Loading, Empty, Failure, Success } from './ChallengesCell'
import { standard } from './ChallengesCell.mock'

describe('ChallengesCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  it('renders Empty successfully', async () => {
    expect(() => {
      render(<Empty />)
    }).not.toThrow()
  })

  it('renders Failure successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  it('renders Success successfully', async () => {
    expect(() => {
      render(<Success challenges={standard().challenges} />)
    }).not.toThrow()
  })
})
