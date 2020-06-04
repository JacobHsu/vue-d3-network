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

## utils.js

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
