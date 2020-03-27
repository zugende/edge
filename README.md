# @foxtrot/edge

A component library for [`foxtrot`](https://github.com/LexSwed/foxtrot) project.

### Acknowledgments

- [TailwindCSS](https://tailwindcss.com) for some design inspirations and color palette
- [Braid Design System](https://seek-oss.github.io/braid-design-system) for components implementations examples
- [@reach/ui](https://reacttraining.com/reach-ui) for accessible inputs logic
- [Alex Sexton](https://www.youtube.com/watch?v=EDyiaDJJu-4) for some of the tips for Design Systems

<details>
<summary>About CSS-in-JS considerations</summary>
<p>

#### I actually like CSS-in-JS:

- you don't need to make up class names
- the composition and styling is easy
- you can use string interpolation to inject common styles and JS properties into CSS, making CSS code more reusable

For example, you can export a color scheme or utils from your library:

```js
// in the library:
export const spacer = (n) => `${n * 8}px`;

const style = css`
  padding: ${spacer(2)};
`;

// in your project

import { spacer } from 'lib';

const style = css`
  margin: ${spacer(1)};
`;
```

And you have consistent margins and paddings (multipliers of 8 in this example)!

I needed `zero-` or `close-to-zero-runtime`. While [`treat`](https://github.com/seek-oss/treat) looks promising, [linaria](https://github.com/callstack/linaria) is built for React and I liked it more. It also had reacher docs with configuration and usage examples. However, it cannot properly compose styles, so I can't do that:

```js
const displayFlex = css`
  display: flex;
`;

const myComponent = styled.div`
  ${displayFlex}
`;
```

It won't add class name of `displayFlex` to my component, because `css` just returns a className. Alrighty, so we need something with runtime.

I already tried `styled-components@5` and I kinda liked it. But it is a bit slower than precompiled solutions. [`emotion`](https://github.com/emotion-js/emotion) looks good as far as you need to declare `@emotion/core` and `@emotion/react` as `peerDependencies`. And basically same performance. Among the two I'd chose `styled-components` just because it's only one peer dependency.

There are other solutions considered, like [astroturf](https://github.com/4Catalyzer/astroturf), or [glaze](https://www.npmjs.com/package/glaze)

#### But I decided...

to stick to a usual setup of `postcss` plus `classnames` for dynamic classnames assignment. Building this way gives neat folders, less mess with `.ts` files and `props` all around. I can just build my components with neat classnames.

Upside:

- setup is easy
- using CSS variables is fun, they are composable
- no peer dependencies
- no weird JS/TS(x) files around
- migrating from CSS to other solutions should be easy in the future

Downsides:

- I liked Tailwind for the approach of atomic CSS classes. With just `postcss` it's hard to share and optimize styles in a composable way (not through class composition please)
- you're not cool for not using CSS-in-JS
- you're stuck with CSS variables (but it's nice feeling actually)
- you can forget CSS variable names even with consistent naming

</p>
</details>
