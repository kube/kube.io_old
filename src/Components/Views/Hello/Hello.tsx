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
          <ul>
            <li>
              <a href="https://stackoverflow.com/users/1914206/kube" target="_blank">
                <StackOverflowLogo />
              </a>
            </li>
            <li>
              <a href="https://github.com/kube" target="_blank">
                <GitHubLogo />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/cfeijoo" target="_blank">
                <LinkedInLogo />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/KubeKhrm" target="_blank">
                <TwitterLogo />
              </a>
            </li>
          </ul>
        </section>

        <section className="friends">
          <h1>Friends</h1>
          <ul>
            <li>
              <a href="http://www.nax.io" target="_blank">Nax</a>
            </li>
            <li>
              <a href="https://www.spuyet.io" target="_blank">Spuyet</a>
            </li>
            <li>
              <a href="http://www.corseman.io" target="_blank">Corseman</a>
            </li>
            <li>
              <a href="http://www.novae.io" target="_blank">Novae</a>
            </li>
          </ul>
        </section>
      </div>

    </div>
  }
}
