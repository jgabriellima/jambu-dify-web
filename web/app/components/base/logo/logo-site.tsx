import type { FC } from 'react'

type LogoSiteProps = {
  className?: string
}

const LogoSite: FC<LogoSiteProps> = ({
  className,
}) => {
  return (
    // <img
    //   src='/logo/logo-site.png'
    //   className={classNames('block w-auto h-10', className)}
    //   alt='logo'
    // />
    <>
      <h1 className="hidden md:block text-[#006400] font-weight-bold text-2xl">Jambu.ai </h1>
      <br/>
      <code className="hidden md:block"> | Business Consulting</code>
    </>

  )
}

export default LogoSite
