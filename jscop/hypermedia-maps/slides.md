---
# You can also start simply with 'default'
theme: apple-basic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
layout: intro-image-right
image: Cover.png
# some information about your slides (markdown enabled)
title: Hypermedia driven Maps
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

# Hypermedia-driven Maps

Using HTML custom elements to drive visualisation

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: two-cols-header
layoutClass: gap-16
---

# Hello, Leaflet HTML!

::left::

- An easy **drop** in map component library.
- Eases **Hypermedia Driven Apps (HDAs)** development.
- Aims to express LeafletJS in **HTML**
- Uses Web Component **standards**
  - Light DOM for easy styling
  - Lifecycle methods for interop

::right::

<l-map center="[55,-5]" zoom="4">
  <l-tile-layer
    url-template="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
  ></l-tile-layer>
  <l-marker lat-lng="[55,-5]">
    <l-popup content="Pop-up"></l-popup>
  </l-marker>
</l-map>

---

# Leaflet HTML 101

- Easy to understand components, that scale and support HTMX.

````md magic-move {lines: true}
```html
<!-- A map -->
<l-map>
</l-map>
```
```html
<!-- With viewport settings -->
<l-map center="[55,-5]" zoom="4">
</l-map>
```
```html
<!-- And an attractive basemap -->
<l-map center="[55,-5]" zoom="4">
  <l-tile-layer
    url-template="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
  ></l-tile-layer>
</l-map>
```
```html
<!-- And a marker -->
<l-map center="[55,-5]" zoom="4">
  <l-tile-layer
    url-template="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
  ></l-tile-layer>
  <l-marker lat-lng="[55,-5]">
  </l-marker>
</l-map>
```
```html
<!-- With a popup -->
<l-map center="[55,-5]" zoom="4">
  <l-tile-layer
    url-template="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
  ></l-tile-layer>
  <l-marker lat-lng="[55,-5]">
    <l-popup content="Pop-up"></l-popup>
  </l-marker>
</l-map>
```
```html
<!-- As a Jinja template -->
<l-map center={{ preference.center }} zoom={{ preference.zoom }}>
  <l-tile-layer
    url-template={{ preference.url_template }}
  ></l-tile-layer>
  {% for location in locations %}
  <l-marker lat-lng={{ location.lat_lng }}>
    <l-popup content={{ location.description }}></l-popup>
  </l-marker>
  {% endfor %}
</l-map>
```
```html
<!-- With HTMX! -->
<l-map center={{ preference.center }} zoom={{ preference.zoom }}>
  <l-tile-layer
    url-template={{ preference.url_template }}
  ></l-tile-layer>
  {% for location in locations %}
  <l-marker lat-lng={{ location.lat_lng }}
    on="click"
    hx-trigger="click"
    hx-target="#placeholder"
    hx-get={{ location.url }}
  >
    <l-popup content={{ location.description }}></l-popup>
  </l-marker>
  {% endfor %}
</l-map>
<div id="placeholder">Replaced by HTMX after marker click</div>
```
````

---
transition: fade-out
layout: two-cols-header
layoutClass: gap-16
---

# Supported components

At the time of writing. Each element `l-method-name` maps to `L.methodName`.

E.g., `L.circle({ latLng: [0, 0] })` would be `<l-circle lat-lng="[0, 0]"></l-circle>`.

::left::

- `<l-circle />`
- `<l-control-layers />`
- `<l-div-icon />`
- `<l-geojson />`
- `<l-icon />`
- `<l-image-overlay />`
- `<l-map />`
- `<l-marker />`

::right::

- `<l-overlay-layers />`
- `<l-pane />`
- `<l-polygon />`
- `<l-polyline />`
- `<l-popup />`
- `<l-rectangle />`
- `<l-tile-layer />`
- `<l-tooltip />`
- `<l-video-overlay />`

---

# Attributes

> Attributes are specified by changing **camelCase** to **kebab-case**. E.g. `maxZoom` becomes `max-zoom`.

For example, a marker with a custom icon in Leaflet JS has attributes like `{ shadowSize: [50, 64] }` in JS, which translates to `shadow-size="[50,64]"` in HTML.

```html
<l-map center="[51.5, -0.09]" zoom="12">
  <l-tile-layer
    url-template="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
  ></l-tile-layer>
  <l-marker lat-lng="[51.5, -0.09]"><l-icon
      icon-url="icons/leaf-green.png"
      shadow-url="icons/leaf-shadow.png"
      icon-size="[38, 95]"
      shadow-size="[50, 64]" 
      icon-anchor="[22, 94]" 
      shadow-anchor="[4, 62]" 
      popup-anchor="[-3, -76]" 
    ></l-icon>
  </l-marker>
</l-map>
```

---

# [Custom Events](https://github.com/andrewgryan/leaflet-html?tab=readme-ov-file#customevents)

- Leaflet HTML wires up a Leaflet JS application by firing and listening to CustomEvents.

Key                       | Description                                                                                 
--                        | --                                                                                          
`l:layer:connected`       | layer is connected to the DOM                                              
`l:layer:removed`         | layer is removed from the DOM but before the disconnectedCallback fires    
`l:popup:connected`       | popup element is connected to the DOM 
`l:icon:connected`        | icon element is connected to the DOM
`l:tooltip:connected`     | tooltip element is connected to the DOM                                    
`l:latlngbounds:connected`| lat-lng-bounds element is connected to the DOM                             
`l:latlngbounds:changed`  | lat-lng-bounds element attribute changed                                   

> [!NOTE]
> At present, only the event keys needed to connect core functionality have been exposed.
> Future releases may add additional events based on user needs. 

---
layout: image-right
image: https://cover.sli.dev
---

# Documentation

- Read more about [Leaflet HTML](https://andrewgryan.github.io/leaflet-html/) in the docs.
- Or view the code on [GitHub](https://github.com/andrewgryan/leaflet-html).

## Installation

```bash
npm i leaflet-html
```

Via `npm` or a `<script />` tags.

```html
<script type="importmap">
  {"imports": {
      "leaflet": "https://unpkg.com/leaflet@1.9.4/dist/leaflet-src.esm.js",
      "leaflet-html": "https://unpkg.com/leaflet-html@latest/dist/leaflet-html.js" }}
</script>
```

```html
<script type="module">
  import "leaflet-html";
</script>
```

---
transition: fade-out
layout: quote
---

# The END

---
