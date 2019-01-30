import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'
import { Helmet } from 'hyperapp-helmet'
import { Count } from './organs'

export const Home = (): any => (_state: any, _actions: any) => (
  <div key="home">
    <h1>Home</h1>
    <Count />
    <div>
      <Link to="/about">About</Link>
    </div>
  </div>
)
