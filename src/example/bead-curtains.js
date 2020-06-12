import icons from './icons.js'

// generates my nodes => [ nodes ]
export const makeMyNodes = () => {
  let nodes = [
    { id: 0, name: '陳輕梧', svgSym: icons.victim },
    { id: 1, name: '孟深', svgSym: icons.gentleman },
    { id: 2, name: '桂華', svgSym: icons.lady },
    { id: 3, name: '阿玉', svgSym: icons.man },
    { id: 4, name: '如靜', svgSym: icons.lady },
    { id: 5, name: '岳叔叔', svgSym: icons.doctor },
    { id: 6, name: '林姨', svgSym: icons.lady },
    { id: 7, name: '夢兒', svgSym: icons.teenage },
    { id: 8, name: '丫鬟', svgSym: icons.chillinglady },
    { id: 9, name: '陳奇舟', svgSym: icons.man },
    { id: 10, name: '蔣醫生', svgSym: icons.doctor },
  ]
  return nodes
}

// generates my links => [ links ]
export const makeMyLinks = (nodes, maxLinks) => {
  let links = []
  links = [
    { id: 1, sid: 1, tid: 2, name:'丫鬟' },
    { id: 2, sid: 5, tid: 2, name:'出診'},
    { id: 4, sid: 0, tid: 3, name:'秘書'},
    { id: 5, sid: 2, tid: 3, name:'母子'},
    { id: 6, sid: 0, tid: 7, name:'父女'},
    { id: 7, sid: 0, tid: 4, name:'夫妻'},
    { id: 8, sid: 10, tid: 7, name:'出診'},
    { id: 9, sid: 6, tid: 7, name:'親戚'},
    { id: 10, sid: 0, tid: 9, name:'侄子'},
    { id: 11, sid: 4, tid: 7, name:'母女'},
    { id: 12, sid: 7, tid: 8, name:'丫鬟'},
    { id: 13, sid: 0, tid: 10, name:'義子'},
    { id: 14, sid: 0, tid: 1, name:'夥伴'},
  ]
  return links
}
