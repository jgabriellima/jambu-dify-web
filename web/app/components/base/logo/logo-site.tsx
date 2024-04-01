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
    <h1 className="text-[#006400]">Jambu.AI</h1>
  )
}

export default LogoSite
