import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'
import { Helmet } from 'hyperapp-helmet'
import { Count } from '../components'

export const Home = (): any => (state: any, actions: any) => (
  <div key="home">
    <h1>Home</h1>
    <Count />
    <div>
      <Link to="/about">About</Link>
    </div>
  </div>
)
