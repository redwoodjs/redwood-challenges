import { Prisma } from '@prisma/client'
import { ResolverArgs } from '@redwoodjs/api/dist/types'
import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { BeforeResolverSpecType } from '@redwoodjs/api'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const votes = () => {
  return db.vote.findMany()
}

export const vote = ({ id }: Prisma.VoteWhereUniqueInput) => {
  return db.vote.findUnique({
    where: { id },
  })
}

interface CreateVoteArgs {
  input: Prisma.VoteCreateInput
}

export const createVote = ({ input }: CreateVoteArgs) => {
  return db.vote.create({
    data: input,
  })
}

interface UpdateVoteArgs extends Prisma.VoteWhereUniqueInput {
  input: Prisma.VoteUpdateInput
}

export const updateVote = ({ id, input }: UpdateVoteArgs) => {
  return db.vote.update({
    data: input,
    where: { id },
  })
}

export const deleteVote = ({ id }: Prisma.VoteWhereUniqueInput) => {
  return db.vote.delete({
    where: { id },
  })
}

export const Vote = {
  entry: (_obj, { root }: ResolverArgs<Prisma.VoteWhereUniqueInput>) =>
    db.vote.findUnique({ where: { id: root.id } }).entry(),
}
