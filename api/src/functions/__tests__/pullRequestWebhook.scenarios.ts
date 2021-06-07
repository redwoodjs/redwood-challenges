import { parseISO } from 'date-fns'

export const standard = defineScenario({
  challenge: {
    splashPage: {
      name: 'RedwoodJS Splash Page Redesign',
      description: 'Redesign the RedwoodJS Splash Page',
      slug: 'splash-page',
      beginsAt: parseISO('2021-05-18T15:51:59Z'),
    },
    errorPage: {
      name: 'RedwoodJS Error Page Redesign',
      description: 'Redesign the RedwoodJS Error Page',
      slug: 'error-page',
      beginsAt: parseISO('2021-05-18T15:51:59Z'),
    },
    notFoundPage: {
      name: 'RedwoodJS Not Found Page Redesign',
      description: 'Redesign the RedwoodJS Not Found Page',
      slug: 'not-found-page',
      beginsAt: parseISO('2021-05-18T15:51:59Z'),
    },
  },
})

export const mismatchedChallenges = defineScenario({
  challenge: {
    unknown: {
      name: 'RedwoodJS Unknown Page Redesign',
      description: 'Redesign an unknown page',
      slug: 'unknown-page',
      beginsAt: parseISO('2021-05-18T15:51:59Z'),
    },
  },
})
