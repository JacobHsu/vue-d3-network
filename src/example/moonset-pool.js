import icons from './icons.js'

// generates my nodes => [ nodes ] moonset-pool
export const makeMyNodes = () => {
  let nodes = [
    { id: 0, name: '安季奚(黑杯)', svgSym: icons.gentleman },
    { id: 1, name: '老張', svgSym: icons.chef },
    { id: 2, name: '吾特', svgSym: icons.man },
    { id: 3, name: '睿司(白杯)', svgSym: icons.man },
    { id: 4, name: '安梧(綠杯)', svgSym: icons.man },
    { id: 5, name: '爾芙', svgSym: icons.lady },
    { id: 6, name: '伍艾菲', svgSym: icons.lady },
    { id: 7, name: '女傭', svgSym: icons.maid },
    { id: 8, name: '小黃', svgSym: icons.dog },
    
  ]
  return nodes
}

// generates my links => [ links ]
export const makeMyLinks = (nodes, maxLinks) => {
  let links = []
  links = [
    { id: 1, sid: 0, tid: 1, name:'雇傭' },
    { id: 2, sid: 1, tid: 2, name:'外甥'},
    { id: 3, sid: 0, tid: 4, name:'侄子'},
    { id: 4, sid: 0, tid: 3, name:'養子'},
    { id: 5, sid: 0, tid: 5, name:'養女'},
    { id: 6, sid: 0, tid: 6, name:'表親'},
    { id: 7, sid: 7, tid: 5, name:'照顧'},
    { id: 8, sid: 7, tid: 6, name:'照顧'},
    { id: 9, sid: 3, tid: 6, name:'幽會'},
    { id: 10, sid: 3, tid: 8, name:'正門'},
    { id: 11, sid: 2, tid: 3, name:'救命'}
  ]
  return links
}
