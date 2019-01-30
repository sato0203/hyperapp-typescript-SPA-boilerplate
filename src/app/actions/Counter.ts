import state from "../states/Counter";

export default {
  down: (value: number) => (s: typeof state) =>
    ({ count: s.count - value }),
  up: (value: number) => (s: typeof state) =>
    ({ count: s.count + value })
}
