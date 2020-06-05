import icons from './icons.js'

// generates my nodes => [ nodes ]
export const makeMyNodes = () => {
  let nodes = [
    { id: 0, name: 'one', svgSym: icons.man },
    { id: 1, name: 'two', svgSym: icons.woman },
    { id: 2, name: 'three' },
    { id: 3, name: 'four' },
    { id: 4, name: 'five' },
  ]
  return nodes
}

// generates my links => [ links ]
export const makeMyLinks = (nodes, maxLinks) => {
  let links = []
  links = [
    { id: 1, sid: 0, tid: 1, name:'link 1 to 2' },
    { id: 2, sid: 0, tid: 4, name:'link 1 to 5'},
    { id: 3, sid: 4, tid: 3, name:'5 to 4'},
    { id: 4, sid: 1, tid: 4, name:'2 to 5'}
  ]
  return links
}
