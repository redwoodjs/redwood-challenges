import { MetaTags } from '@redwoodjs/web'

type AppLayoutProps = {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <MetaTags title="RedwoodJs Challenges" />
      <div className="p-12">{children}</div>
    </>
  )
}

export default AppLayout
