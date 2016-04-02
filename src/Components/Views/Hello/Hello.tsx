import * as React from 'react'

import { Header } from '../../Header/Header'

import { Logo as StackOverflowLogo } from '../../Logos/StackOverflow'
import { Logo as LinkedInLogo } from '../../Logos/LinkedIn'
import { Logo as GitHubLogo } from '../../Logos/GitHub'
import { Logo as TwitterLogo } from '../../Logos/Twitter'

export class View
  extends React.Component<any, any> {

  render() {
    return <div className="page page-hello">
      <Header />
      <div className="page-content">

        <section className="intro">
          <h1>Hello, </h1>
          <p>
            I’m Christophe Feijoo, a developer and entrepreneur in Paris.
            <br/>
            I’m from 42, a computer science school.
            <br/>
            Here is some of my work and ideas.
          </p>
        </section>

        <section className="social">
          <StackOverflowLogo />
          <GitHubLogo />
          <LinkedInLogo />
          <TwitterLogo />
        </section>

        <section className="friends">
          <h1>Friends</h1>
          <ul>
            <li>Nax</li>
            <li>Spuyet</li>
            <li>Corseman</li>
            <li>Novae</li>
          </ul>
        </section>
      </div>

    </div>
  }
}
