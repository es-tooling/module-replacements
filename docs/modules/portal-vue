---
description: Modern alternatives to the `portal-vue` package for making portals in vue applications
---

# Replacements for `portal-vue`

## Vue `Teleport` API

Since Vue 3 the [Teleport]('https://vuejs.org/guide/built-ins/teleport.html') it replaces portal-vue for most use cases, especially modals and overlays.
<Teleport> only moves DOM nodes to an existing target — it does not manage destinations, layouts, or component structure.

```ts
// Using a modal
<div class="outer">
    <h3>Vue Teleport Example</h3>
    <div>
        <MyModal />
    </div>
</div>
```

```ts
// MyModal.vue
    <Teleport to="body">
        <p>The content inside of Teleport will render in html body</p>
    </Teleport>
```
