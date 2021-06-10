// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  challenges: [
    {
      id: 'one',
      name: 'RedwoodJS Splash Page Redesign',
      description: 'Redesign the RedwoodJS Splash Page',
      slug: 'splash-page',
      beginsAt: new Date(),
    },
    {
      id: 'two',
      name: 'RedwoodJS Error Page Redesign',
      description: 'Redesign the RedwoodJS Error Page',
      slug: 'error-page',
      beginsAt: new Date(),
    },
    {
      id: 'three',
      name: 'RedwoodJS Not Found Page Redesign',
      description: 'Redesign the RedwoodJS Not Found ',
      slug: 'not-found-page',
      beginsAt: new Date(),
    },
  ],
})
