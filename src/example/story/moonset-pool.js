import icons from './icons.js'

// generates my nodes => [ nodes ] moonset-pool
export const makeMyNodes = () => {
  let nodes = [
    { id: 0, name: '安季奚(北)', svgSym: icons.gentleman },
    { id: 1, name: '老張(南大)', svgSym: icons.chef },
    { id: 2, name: '吾特(北)', svgSym: icons.man },
    { id: 3, name: '睿司(北)', svgSym: icons.man },
    { id: 4, name: '安梧(北)', svgSym: icons.man },
    { id: 5, name: '爾芙(北)', svgSym: icons.victim },
    { id: 6, name: '伍艾菲(北)', svgSym: icons.victim },
    { id: 7, name: '老妹 6號病人', svgSym: icons.maid },
    { id: 8, name: '小黃(北)', svgSym: icons.dog },
    { id: 9, name: '安季奚(南)', svgSym: icons.victim },
    { id: 10, name: '老張(北二)', svgSym: icons.chef },
    { id: 11, name: '吾特(南)', svgSym: icons.victim },
    { id: 12, name: '睿司(南)', svgSym: icons.victim },
    { id: 13, name: '安梧(南)', svgSym: icons.man },
    { id: 14, name: '爾芙(南)', svgSym: icons.lady },
    { id: 15, name: '伍艾菲(南)', svgSym: icons.lady },
    { id: 16, name: '北(早一周)' },
    { id: 17, name: '南' },
    { id: 18, name: '吾特(北至南)', svgSym: icons.criminal },
    { id: 19, name: '安梧(北) 39號病人', svgSym: icons.criminal },
    { id: 20, name: '小黃(南)', svgSym: icons.dog },
    { id: 21, name: '安梧(南至北)', svgSym: icons.criminal },
    
  ]
  return nodes
}

// generates my links => [ links ]
export const makeMyLinks = (nodes, maxLinks) => {
  let links = []
  links = [
    { id: 1, sid: 10, tid: 7, name:'兄妹' },
    { id: 2, sid: 1, tid: 11, name:'外甥'},
    { id: 4, sid: 0, tid: 16, name:''},
    { id: 5, sid: 9, tid: 14, name:'外出上海', _color: 'SkyBlue'},
    { id: 6, sid: 0, tid: 6, name:'愛戀', _color: 'pink'},
    { id: 7, sid: 9, tid: 7, name:'強暴'},
    { id: 8, sid: 1, tid: 7, name:'兄妹'},
    { id: 9, sid: 3, tid: 6, name:'目擊'},
    { id: 10, sid: 3, tid: 8, name:'親近'},
    { id: 11, sid: 2, tid: 3, name:'救命'},
    { id: 12, sid: 10, tid: 15, name:'教菜'},
    { id: 13, sid: 3, tid: 15, name:'幽會', _color: 'pink'},
    { id: 14, sid: 9, tid: 15, name:'買養'},
    { id: 15, sid: 1, tid: 10, name:'兄第'},
    { id: 16, sid: 2, tid: 6, name:'情殺', _color: 'dimgray'},
    { id: 17, sid: 16, tid: 2, name:'2'},
    { id: 18, sid: 16, tid: 3, name:'3'},
    { id: 19, sid: 16, tid: 4, name:'1'},
    { id: 20, sid: 16, tid: 5, name:'4'},
    { id: 21, sid: 16, tid: 6, name:'5'},
    { id: 22, sid: 17, tid: 11, name:'2'},
    { id: 23, sid: 17, tid: 12, name:'3'},
    { id: 24, sid: 17, tid: 13, name:'1'},
    { id: 25, sid: 17, tid: 14, name:'4'},
    { id: 26, sid: 17, tid: 15, name:'5'},
    { id: 26, sid: 17, tid: 9, name:'0'},
    { id: 27, sid: 17, tid: 1, name:''},
    { id: 28, sid: 16, tid: 10, name:''},
    { id: 29, sid: 13, tid: 15, name:'情書', _color: 'pink'},
    { id: 30, sid: 18, tid: 9, name:'毒殺', _color: 'dimgray'},
    { id: 31, sid: 4, tid: 17, name:'發現(精神異常)', _color: 'SkyBlue'},
    { id: 32, sid: 14, tid: 19, name:'見習', _color: 'SkyBlue'},
    { id: 33, sid: 14, tid: 7, name:'見習', _color: 'SkyBlue'},
    { id: 34, sid: 15, tid: 20, name:'餵食'},
    { id: 35, sid: 12, tid: 14, name:'情書', _color: 'pink'},
    { id: 36, sid: 5, tid: 21, name:'告知命案', _color: 'SkyBlue'},
    { id: 37, sid: 18, tid: 12, name:'畏罪殺', _color: 'dimgray'},
    { id: 38, sid: 18, tid: 5, name:'目擊殺', _color: 'dimgray'},
    { id: 39, sid: 18, tid: 11, name:'取代殺', _color: 'dimgray'},
    { id: 40, sid: 11, tid: 14, name:'喜歡', _color: 'pink'},
    { id: 41, sid: 5, tid: 2, name:'告密'},

  ]
  return links
}
