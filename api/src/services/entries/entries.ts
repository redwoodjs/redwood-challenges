import { Prisma } from '@prisma/client'
import { ResolverArgs } from '@redwoodjs/api/dist/types'
import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
import { requireAuth } from 'src/lib/auth'
import { BeforeResolverSpecType } from '@redwoodjs/api'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const entries = () => {
  return db.entry.findMany()
}

export const entry = ({ id }: Prisma.EntryWhereUniqueInput) => {
  return db.entry.findUnique({
    where: { id },
  })
}

export const decodedEntryContent = async ({
  id,
}: Prisma.EntryWhereUniqueInput) => {
  try {
    const encoded = await db.entry.findUnique({
      where: { id },
      select: { content: true },
    })

    const buffer = Buffer.from(encoded.content, 'base64')
    return buffer.toString('utf-8')
  } catch (error) {
    logger.warn({ entryId: id }, 'Unable to decode content for entry')
    return ''
  }
}

interface CreateEntryArgs {
  input: Prisma.EntryCreateInput
}

export const createEntry = ({ input }: CreateEntryArgs) => {
  return db.entry.create({
    data: input,
  })
}

interface UpdateEntryArgs extends Prisma.EntryWhereUniqueInput {
  input: Prisma.EntryUpdateInput
}

export const updateEntry = ({ id, input }: UpdateEntryArgs) => {
  return db.entry.update({
    data: input,
    where: { id },
  })
}

export const upsertEntry = ({ input }: CreateEntryArgs) => {
  return db.entry.upsert({
    where: { uid: input.uid },
    update: { ...input },
    create: { ...input },
  })
}

export const deleteEntry = ({ id }: Prisma.EntryWhereUniqueInput) => {
  return db.entry.delete({
    where: { id },
  })
}

export const Entry = {
  challenge: (_obj, { root }: ResolverArgs<Prisma.EntryWhereUniqueInput>) =>
    db.entry.findUnique({ where: { id: root.id } }).challenge(),
  votes: (_obj, { root }: ResolverArgs<Prisma.EntryWhereUniqueInput>) =>
    db.entry.findUnique({ where: { id: root.id } }).votes(),
}
