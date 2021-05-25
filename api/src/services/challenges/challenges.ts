import { Prisma } from '@prisma/client'
import { ResolverArgs } from '@redwoodjs/api/dist/types'
import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { BeforeResolverSpecType } from '@redwoodjs/api'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const challenges = () => {
  return db.challenge.findMany()
}

export const challenge = ({ id }: Prisma.ChallengeWhereUniqueInput) => {
  return db.challenge.findUnique({
    where: { id },
  })
}

interface CreateChallengeArgs {
  input: Prisma.ChallengeCreateInput
}

export const createChallenge = ({ input }: CreateChallengeArgs) => {
  return db.challenge.create({
    data: input,
  })
}

interface UpdateChallengeArgs extends Prisma.ChallengeWhereUniqueInput {
  input: Prisma.ChallengeUpdateInput
}

export const updateChallenge = ({ id, input }: UpdateChallengeArgs) => {
  return db.challenge.update({
    data: input,
    where: { id },
  })
}

export const deleteChallenge = ({ id }: Prisma.ChallengeWhereUniqueInput) => {
  return db.challenge.delete({
    where: { id },
  })
}

export const Challenge = {
  entries: (_obj, { root }: ResolverArgs<Prisma.ChallengeWhereUniqueInput>) =>
    db.challenge.findUnique({ where: { id: root.id } }).entries(),
}
