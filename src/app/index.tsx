import { h, View } from 'hyperapp'
import { Switch, Route } from '@hyperapp/router'
import { Home, About } from './views'
import _states from "./states"
import _actions from "./actions"

export default {
  state : _states,
  actions : _actions,
  view : (states:typeof _states, actions:typeof _actions) => (
    <Switch>
      <Route path="/" render={Home} />
      <Route path="/about" render={About} />
    </Switch>
  )
}
