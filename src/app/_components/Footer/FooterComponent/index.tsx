'use client'
import React from 'react'
import { url } from 'inspector'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Footer, Media } from '../../../../payload/payload-types'
import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../constants'
import { Button } from '../../Button'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()

  const navitems = footer?.navItems || []
  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map(inclusion => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
              />
              <h5 className={classes.title}>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>
      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href="/">
              <Image src="/logo-white.svg" alt="logo" width={170} height={50} />
            </Link>
            {/* <p className={classes.copyright}>{footer.copyright}</p> */}

            <div className="classes.socialLinks">
              {navitems.map(item => {
                const icon = item?.link?.icon as Media

                return (
                  <Button
                    key={item.link.label}
                    el="link"
                    href={item.link.url}
                    newTab={true}
                    className={classes.socialLinkItem}
                  >
                    <Image
                      src={icon?.url}
                      alt={item.link.label}
                      width={36}
                      height={36}
                      className={classes.socialLinkItem}
                    />
                  </Button>
                )
              })}
            </div>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}
export default FooterComponent
