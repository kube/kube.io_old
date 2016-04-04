import * as React from 'react'

import { Header } from '../../Header/Header'

import { Logo as GitHubLogo } from '../../Logos/GitHub'

export class View
  extends React.Component<any, any> {

  render() {
    return <div className="page page-work">
      <Header />
      <div className="page-content">

        <section className="intro">
          <h1>My Projects</h1>

          <article>
            <div className="leftbar">
              <div className="date">
                <span className="month">March</span>
                <span className="year">2016</span>
              </div>
            </div>

            <div className="content">
              <h2>DotID</h2>
              <p className="description">Zappy is a game composed by three programs : A server that emulates a world, where AI connect and try to evolve, by taking ressources on the map, they need to play by team, and each bot is a fork of the AI. The graphic visualizer permits to see in real-time what happens on the server. Our project was written in pure C for the Server, in Coffeescript/NodeJs for the AI, and in NodeJs/NodeWebkit/ThreeJS for the Graphic Visualizer.</p>
              <GitHubLogo />
            </div>
          </article>

          <article>
            <div className="leftbar">
              <div className="date">
                <span className="month">February</span>
                <span className="year">2016</span>
              </div>
            </div>

            <div className="content">
              <h2>Cut</h2>
              <p className="description">Kuji is a simple library for NodeJS, simplifying asynchronous tasks.The goal is to easily create a control-flow graph of tasks, just by providing dependencies between them, permitting to optimize the execution timeline.It is already available, but still in development.More features will be added later, and I have plan to port it to Ruby too.</p>
              <GitHubLogo />
            </div>
          </article>

          <article>
            <div className="leftbar">
              <div className="date">
                <span className="month">January</span>
                <span className="year">2016</span>
              </div>
            </div>

            <div className="content">
              <h2>VSCode ClangComplete</h2>
              <p className="description">Kuji is a simple library for NodeJS, simplifying asynchronous tasks.The goal is to easily create a control-flow graph of tasks, just by providing dependencies between them, permitting to optimize the execution timeline.It is already available, but still in development.More features will be added later, and I have plan to port it to Ruby too.</p>
              <GitHubLogo />
            </div>
          </article>

          <article>
            <div className="leftbar">
              <div className="date">
                <span className="month">June</span>
                <span className="year">2014</span>
              </div>
            </div>

            <div className="content">
              <h2>kuji</h2>
              <p className="description">Kuji is a simple library for NodeJS, simplifying asynchronous tasks.The goal is to easily create a control-flow graph of tasks, just by providing dependencies between them, permitting to optimize the execution timeline.It is already available, but still in development.More features will be added later, and I have plan to port it to Ruby too.</p>
              <GitHubLogo />
            </div>
          </article>

          <article>
            <div className="leftbar">
              <div className="date">
                <span className="month">March</span>
                <span className="year">2014</span>
              </div>
            </div>

            <div className="content">
              <h2>Zappy</h2>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/F2R2BoDBg5Y" frameborder="0" allowfullscreen></iframe>
              <p className="description">Zappy is a game composed by three programs : A server that emulates a world, where AI connect and try to evolve, by taking ressources on the map, they need to play by team, and each bot is a fork of the AI. The graphic visualizer permits to see in real-time what happens on the server. Our project was written in pure C for the Server, in Coffeescript/NodeJs for the AI, and in NodeJs/NodeWebkit/ThreeJS for the Graphic Visualizer.</p>
              <GitHubLogo />
            </div>
          </article>

          <article>
            <div className="leftbar">
              <div className="date">
                <span className="month">March</span>
                <span className="year">2014</span>
              </div>
            </div>

            <div className="content">
              <h2>Raytracer</h2>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/1JoTZg4Ulo0" frameborder="0" allowfullscreen></iframe>
              <p className="description">Multi-threaded asynchronous Raytracer, with embedded editor, done from scratch in really low-level C, without any graphic library used, in 3 weeks.</p>
              <GitHubLogo />
            </div>
          </article>


          <article>
            <div className="leftbar">
              <div className="date">
                <span className="month">December</span>
                <span className="year">2013</span>
              </div>
            </div>

            <div className="content">
              <h2>Fdf</h2>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/X3pcTRCgQF4" frameborder="0" allowfullscreen></iframe>
              <p className="description">Basic Rasterizer, allowing movements, antialiased lines, movement blur, parallel/one-point perspective switch, possibility to change the perspective point. Done in really low-level C, in one week.</p>
              <GitHubLogo />
            </div>
          </article>

        </section>

      </div>
    </div>
  }
}
