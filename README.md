# Redwood Challenges

- To encourage contributions, not necessarily to the core of the framework, but for designers, front-end only developers, tutorials/walkthroughs/guides
- Entries should be very easy to make, and not necessarily require deep knowledge of Redwood
- To engage the community by allowing voting and social sharing
- To showcase redwood's capabilities within the source code of this application

## Key terms

### Challenge

    For a fixed duration, core team will request entries on a specified topic. The entries will appear on the Redwood Challenge site. Anyone can vote for one or many entries in each competition. The "winner" will be decided by the core team

### Entry

    The contribution put forward for voting where the author describes their concept.

### Vote

    One or many "upvotes" for each challenge. No downvoting, and vote counting is not serious - its more meant to engage the community rather than pitch one submission against another.

## Workflow

**Version 1: Submission is HTML-only**

1. Author forks, clones challenges repo. Runs a simple command-line script, that lets asks them a few questions e.g. "which challenge", "whats your github username", "name your concept" and generates a template html file for you start working on with the rules and guidelines of the contribution.
2. Author raises a Pull request on "redwood-challenges" repo once they're ready to submit
3. Core team reviews PR to ensure structure for:
    1. Competition label/ folder placement
    2. PR template filled in correctly

    PR template should request:

    - Concept behind design, which will appear on the challenges website (make it clear to them as they raise it)
    - Any credits if you've used other peoples work
    - Confirmation that content is free to use, and will be publicly available

4. Once core team approves and merged the PR

a. Receives incoming pull_request webhook from GitHub

b. Validates content (status based on action and merged state, challenge based on label/project, rejects if challenge is closed/has winner)

c. Saves as Submission with information needed to publish to Challenge site

d. Ready for voting

## Showcase RedwoodJS App

- Webhooks
- Storyboard
- Scenarios
- Testing
- Logging
- Secure Resolvers
- Schedule Job
- TailwindCss
- Accessibility
- Seed Data
- Prerender
- JAMStack Deploy
- Prisma Schema / Data Model
- DPR / SEO Image Previews
- Typescript

---

# Redwood

> **WARNING:** RedwoodJS software has not reached a stable version 1.0 and should not be considered suitable for production use. In the "make it work; make it right; make it fast" paradigm, Redwood is in the later stages of the "make it work" phase.

## Getting Started
- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
yarn rw prisma migrate dev
yarn rw prisma db seed
```

#### Supabase Local Dev Setup

* install [supabase cli](https://github.com/supabase/cli)

```terminal
npm install supabase -g
```

* `supabase init`

You may want to set the Postgres port to 6432 if you have another instance running on the default port.

```
# Note this and add to env
# Supabase URL: http://localhost:7000
# Supabase Key (anon, public): Note this and add to env
# Supabase Key (service_role, private): Note this and add to env
# Database URL: postgres://postgres:postgres@localhost:6432/postgres
# Email testing interface URL: http://localhost:9000
```

* `supabase start`
* `supabase stop`



#### Ngrok Tunnelling

`ngrok http --host-header=rewrite --subdomain=your-subdomain 8910`

To receive incoming webhooks on just api side:

`ngrok http --host-header=rewrite --subdomain=your-subdomain 8911`

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.
