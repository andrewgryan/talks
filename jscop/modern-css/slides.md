---
highlighter: shiki
theme: seriph
background: https://cover.sli.dev
title: Modern CSS
transition: slide-left
mdc: true
---

# CSS Scope!

---
layout: quote
---

# Heard of <span text-hex-8080f2 font-bold><span v-mark="0">@scope</span></span> syntax?

---
---

# Introduction

<v-clicks>

1. What is the new **@scope** CSS feature?
2. What problem(s) does it solve?
3. Why is it worth learning?

</v-clicks>

---

# Disambiguation: scoped vs. @scope


- Don't confuse [@scope]{style="color:var(--green-5)"} with [scoped]{style="color:var(--red-5)"} style tag attribute
- <span v-mark.underlined.red.at="1">Removed from specification</span> and <span v-mark.circle.blue.at="2">no longer supported by any browser</span>

```html
<link rel="stylesheet" scoped> <!-- DEPRECATED SYNTAX -->
<style scoped></style>         <!-- DEPRECATED SYNTAX -->
```

---

# Browser support for @scope

- Not yet. But soon.

![Caniuse](./caniuse.png)

---

# CSS @scope rule

- Restrict styles to sub-tree
- Like nesting but without generating highly-specific selectors

```css
@scope (.card) {
  :scope {
    /* rules that affect .card itself */
    display: flex;
  }

  a {
    /* rule(s) that affect links inside .card
     * outside unaffected
     */
    background-color: lavender;
  }
}
```

---

# CSS @scope rule

- Without Block-Element-Modifier class names
- Can use CSS props instead of Atomic classes

````md magic-move {lines: true}
```css
.block {
  display: flex;
  gap: var(--size-2);
}
.block__element {
  background-color: lavender;
}
.block__element--modifier {
  border-radius: var(--size-0);
}
```
```css
@scope (nav) {
  :scope {
    display: flex;
    gap: var(--size-2);
  }

  a {
    background-color: lavender;
  }

  a.current {
    border-radius: var(--size-0);
  }
}
```
````

---

# CSS @scope effect on Markup

- Eliminates markup coupling to CSS concerns
- Encourages semantic HTML usage

````md magic-move {lines: true}
```html
<!--
  BEM/SMACCS/OOCS - project-wide unique role based class names
-->
<nav class="block">
  <a href="/" class="block__element block__element--modifier">Home</a>
  <a href="/account" class="block__element">Account</a>
</nav>
```
```html
<!--
  @scope - element selectors are safe to use
-->
<nav>
  <a href="/" class="current">Home</a>
  <a href="/account">Account</a>
</nav>
```
```html
<!--
  Tailwind - utility classes avoid overlapping effects
-->
<nav class="flex gap-x-2">
  <a href="/" class="bg-teal-100 border-teal-300 rounded-lg">Home</a>
  <a href="/account" class="bg-teal-100">Account</a>
</nav>
```
````

---

# Inline style a la Svelte

- A vanilla HTML/CSS svelte-like component

````md magic-move
```html
<!-- @scope used inline in the DOM -->
<style>
  @scope {
    :scope {
      /* Container styles */
    }

    selector {
      /* styling scoped to "component" */
    }
  }
</style>

<!-- Markup section -->
<div>...</div>
```

```html
<!-- Static Component -->
<style>
  @scope {
    :scope {
      /* Container styles */
      border-radius: var(--size-2);
      box-shadow: var(--shadow);
    }

    h3 {
      /* styling scoped to "component" */
      color: var(--brand);
      font-size: var(--font-size-6);
    }
  }
</style>

<!-- Markup section -->
<h3>Card Title</h3>
<p>Content</p>
```
```html
<!-- Jinja2 Component -->
<style>
  @scope {
    :scope {
      /* Container styles */
      border-radius: var(--size-2);
      box-shadow: var(--shadow);
    }

    h3 {
      /* styling scoped to "component" */
      color: var(--brand);
      font-size: var(--font-size-6);
    }
  }
</style>

<!-- Markup section -->
<h3>{{ title }}</h3>
<p>{{ body }}</p>
```
```html
<!-- Svelte component -->
<style>
  div {
    /* Container styles */
    border-radius: var(--size-2);
    box-shadow: var(--shadow);
  }

  h3 {
    /* styling scoped to "component" */
    color: var(--brand);
    font-size: var(--font-size-6);
  }
</style>

<!-- Markup section -->
<div>
  <h3>{ post.title }</h3>
  <p>{ post.body }</p>
</div>
```
````

---

# Donut scope

<v-clicks>

- Restrict styles to sub-tree excluding inner sub-tree(s)
- Donut/swiss cheese topology

</v-clicks>

<v-click>

```css
h2 {
  color: silver;
}

/* Use @scope to limit styles */
@scope (.card) to (.inner) {
  h2 {
    color: gold;
  }
}
```

</v-click>
<v-click>

```html
<!-- Sample markup -->
<div class="card">
  <h2>Gold title</h2>
  <div class="inner">
    <h2>Silver title</h2>
  </div>
</div>
```
</v-click>

---
layout: image-right
image: ./meme.webp
backgroundSize: contain
---

# Conclusion

<ul>
  <li v-click="1">Not <span v-mark='{"type": "highlight", "color": "teal", "at": "2"}' class="px-0.5 mx-1">100%</span> production ready (yet)</li>
  <li v-click="3">CSS specificity <span v-mark.underline.red.at="4">less dangerous</span> and no longer <code>!important</code></li>
  <li v-click="5">Semantic/accessible HTML <span v-mark.box.blue.at="6">friendly</span></li>
</ul>

