import * as React from 'react'
import { Link } from 'react-router'

import { Logo as KubeLogo } from '../Logos/Kube'

export class Header
  extends React.Component<any, any> {

  constructor(props: any) {
    super(props)
  }

  render() {
    return <header>
      <nav>
        <ul>
          <li>
            <Link activeClassName="active" to="/work">Work</Link>
          </li>
          <li>
            <Link activeClassName="active" to="/">
              <KubeLogo />
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  }
}
