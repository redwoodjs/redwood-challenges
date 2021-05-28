type AppLayoutProps = {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return <div className="p-12">{children}</div>
}

export default AppLayout
