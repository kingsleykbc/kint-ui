import { withRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'

const ActiveLink = ({ router:{pathname}, children, ...props }) => {

  let className = props.className || null;

  const isActiveClass = (`/${pathname.split('/')[1]}` === props.href) && props.activeClassName;

  if (isActiveClass) className = `${className || ''} ${props.activeClassName}`.trim()

  delete props.activeClassName

  return <Link {...props}><a className={className}>{children}</a></Link>
}

export default withRouter(ActiveLink)