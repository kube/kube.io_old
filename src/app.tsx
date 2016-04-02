import * as React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import { View as HelloView } from './Components/Views/Hello/Hello'
import { View as WorkView } from './Components/Views/Work/Work'
import { View as BlogView } from './Components/Views/Blog/Blog'

let appContainer = document.getElementById('app-root')

render((
  <div>
    <Router history={ browserHistory }>
      <Route path="/" component={ HelloView } />
      <Route path="/work" component={ WorkView } />
      <Route path="/blog" component={ BlogView } />
    </Router>
  </div>
), appContainer)
