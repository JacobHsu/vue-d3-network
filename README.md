# vue-d3-network

[vue-d3-network](https://github.com/emiliorizzo/vue-d3-network)
aliyun [vue-d3-network](https://developer.aliyun.com/mirror/npm/package/vue-d3-network)

`$ yarn add d3-force`
`$ yarn add pug pug-plain-loader raw-loader stylus stylus-loader -D`

example\d3-net-example.vue

```js
data () {
    data.settings = {
      maxLinks: 3,
      maxNodes: 150
    }
}
```

example\data.js

```js
    force: 350,
    nodeLabels: false,
    linkLabels: false,
```

example\d3-net-example.vue

```js
reset () {
    this.nodes = utils.makeRandomNodes(this.settings.maxNodes)
}
```



## Links Label

components\svgRenderer.vue

```js
    //-> Links Labels
    g.labels#link-labels(v-if='linkLabels')
      text.link-label(v-for="link in links" :font-size="fontSize" )
        textPath(v-bind:xlink:href="'#' + link.id" startOffset= "50%") {{ link.name }}
```

src\vue-d3-network.vue

```js
created () {
  this.links = this.buildLinks(this.netLinks)

  props: {
    netNodes: {
      type: Array
    },
    netLinks: {
      type: Array
    },
```

example\d3-net-example.vue

```js
  #example(@keyup.esc='setTool("pointer")')
    //-> Network
    d3-network(
    ref='net'
    :net-nodes="nodes"
    :net-links="links"

    reset () {
       this.links = utils.makeRandomLinks(this.nodes, this.settings.maxLinks)
```

> ! reset () 回傳的 this.links 的 原始內容被再改了

`{id: "hacking", sid: 0, tid: 1}` -> 

```js
0:
id: "hacking"
index: 0
name: "Link hacking"
sid: 0
source: {index: 0, …}
target: {index: 1, …}
tid: 1
```

```js

    d3-network(
    ref='net'
    :net-nodes="nodes"
    :net-links="links"
    :selection="{nodes: selected, links: linksSelected}"
    :options="options"
    :linkCb="linkCb"

  methods: {
    linkCb (link) {
      link.name = 'Link ' + link.id
      return link
    },
```

### utils.js

```js
export const makeRandomLinks = (nodes, maxLinks) => {
      let name = faker.hacker.ingverb() 
      links.push(newLink(name, source, target))

// link formatter
export const newLink = (id, sid, tid) => {
  return { id, sid, tid }
}
```

```js
// random node name
const newNodeName = () => {
  return faker.name.findName() //Math.random().toString(36).substring(7)
}
```

## Links Label Fixed

[vue-d3-network links labels](https://codepen.io/emilio/pen/ZampZb)

example\d3-net-example.vue

```js
  methods: {
    linkCb (link) {
      //link.name = 'Link ' + link.id
      return link
    },
```

example\utils.js

```js
// link formatter
export const newLink = (id, sid, tid, name) => {
  return { id, sid, tid, name }
}

// generates random links => [ links ]
export const makeRandomLinks = (nodes, maxLinks) => {
    let name = faker.hacker.ingverb() 
    links.push(newLink(id, source, target, name))
}
```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
