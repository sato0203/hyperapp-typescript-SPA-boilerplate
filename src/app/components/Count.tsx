import { h } from 'hyperapp'
import _action from '../actions';
import _state from '../states';

export const Count = ():any => (
  state: typeof _state,
  actions: typeof _action
) => (
  <div>
    <h2>{state.counter.count}</h2>
    <button onclick={() => actions.counter.up(1)}>+</button>
    <button onclick={() => actions.counter.down(1)}>-</button>
  </div>
)
