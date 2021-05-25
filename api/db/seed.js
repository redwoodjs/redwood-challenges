/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()

const db = new PrismaClient()

/*
 * Seed data is database data that needs to exist for your app to run.
 *
 * @see https://www.prisma.io/docs/reference/api-reference/command-reference#migrate-reset
 * @see https://www.prisma.io/docs/guides/prisma-guides/seed-database
 * @see https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#upsert
 * @see https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
 */
async function main() {
  console.info('Seeding challenges ...')

  const challenges = [
    {
      name: 'RedwoodJS Splash Page Redesign',
      description: 'Redesign the RedwoodJS Splash Page',
      slug: 'splash-page',
      beginsAt: new Date(),
    },
    {
      name: 'RedwoodJS Error Page Redesign',
      description: 'Redesign the RedwoodJS Error Page',
      slug: 'error-page',
      beginsAt: new Date(),
    },
    {
      name: 'RedwoodJS Not Found Page Redesign',
      description: 'Redesign the RedwoodJS Not Found ',
      slug: 'not-found-page',
      beginsAt: new Date(),
    },
  ]

  await db.challenge.createMany({ data: challenges })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
