import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'
import { Helmet } from 'hyperapp-helmet'
import { Count } from '../components/Count'

export const About = (): any => (state: any, actions: any) => (
  <div key="about">
    <h1>About</h1>
    <Count />
    <div>
      <Link to="/">Home</Link>
    </div>
  </div>
)
