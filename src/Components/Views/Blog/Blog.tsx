import * as React from 'react'

import { Header } from '../../Header/Header'

export class View
  extends React.Component<any, any> {

  render() {
    return <div className="page page-blog">
      <Header />
      <div className="page-content">

        <section className="intro">
          <h1>My Blog</h1>
          <h2>Some articles about programming & startups</h2>

          <p>Kuji is a simple library for NodeJS, simplifying asynchronous tasks.The goal is to easily create a control-flow graph of tasks, just by providing dependencies between them, permitting to optimize the execution timeline.It is already available, but still in development.More features will be added later, and I have plan to port it to Ruby too.</p>
        </section>

      </div>

    </div>
  }
}
