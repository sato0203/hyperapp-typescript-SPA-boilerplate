

# 要修正(VSCode対応)

Routeの型定義を
`VNode<RenderProps<P>> | void`から`VNode<RenderProps<P>> | null`に変えないと
VSCodeに怒られます。

```
export function Route<P>(
  props: RouteProps<P>
): VNode<RenderProps<P>> | null;
```