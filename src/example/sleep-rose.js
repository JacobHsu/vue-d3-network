import icons from './icons.js'

// generates my nodes => [ nodes ]
export const makeMyNodes = () => {
  let nodes = [
    { id: 0, name: '羅亨理', svgSym: icons.victim },
    { id: 1, name: '羅明莎', svgSym: icons.teenage },
    { id: 2, name: '黃蘇玫', svgSym: icons.lady },
    { id: 3, name: '黃余政', svgSym: icons.oldman },
    { id: 4, name: '黃昭然', svgSym: icons.student },
    { id: 5, name: '西卜博士', svgSym: icons.doctor },
    { id: 6, name: '陶山德', svgSym: icons.gentleman },
    { id: 7, name: '阿晴', svgSym: icons.chillinglady },
    { id: 8, name: '小霽', svgSym: icons.chillinglady },
    { id: 9, name: '陶孝先', svgSym: icons.man },
    { id: 10, name: '王懷武', svgSym: icons.hiphop },
    { id: 11, name: '羅千海', svgSym: icons.criminal },
  ]
  return nodes
}

// generates my links => [ links ]
export const makeMyLinks = (nodes, maxLinks) => {
  let links = []
  links = [
    { id: 1, sid: 0, tid: 1, name:'兄妹' },
    { id: 2, sid: 0, tid: 2, name:'前夫妻'},
    { id: 3, sid: 3, tid: 2, name:'兄妹'},
    { id: 4, sid: 3, tid: 4, name:'父女'},
    { id: 5, sid: 0, tid: 5, name:'信奉'},
    { id: 6, sid: 0, tid: 6, name:'信奉'},
    { id: 7, sid: 6, tid: 2, name:'夫妻'},
    { id: 8, sid: 6, tid: 7, name:'父女'},
    { id: 9, sid: 6, tid: 8, name:'父女'},
    { id: 10, sid: 7, tid: 8, name:'姊妹'},
    { id: 11, sid: 6, tid: 9, name:'父子'},
    { id: 12, sid: 9, tid: 5, name:'師徒'},
    { id: 13, sid: 9, tid: 7, name:'兄妹'},
    { id: 14, sid: 9, tid: 8, name:'兄妹'},
    { id: 15, sid: 3, tid: 6, name:'陷害', _svgAttrs: {}},
    { id: 16, sid: 5, tid: 3, name:'買通'},
    { id: 17, sid: 7, tid: 10, name:'戀人'},
    { id: 18, sid: 0, tid: 7, name:'買'},
    { id: 19, sid: 4, tid: 8, name:'假冒'},
    { id: 20, sid: 0, tid: 11, name:'雇傭'},
    { id: 21, sid: 11, tid: 6, name:'殺'},
    { id: 22, sid: 4, tid: 11, name:'騙'},
    { id: 23, sid: 7, tid: 11, name:'救'}
  ]
  return links
}
