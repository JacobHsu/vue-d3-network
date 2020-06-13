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
    { id: 8, name: '丫鬟(桂月)', svgSym: icons.chillinglady },
    { id: 9, name: '陳奇舟', svgSym: icons.man },
    { id: 10, name: '蔣醫生', svgSym: icons.doctor },
    { id: 11, name: '疙瘩', svgSym: icons.dog },
    
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
    { id: 10, sid: 0, tid: 9, name:'侄子(教唆)'},
    { id: 11, sid: 4, tid: 7, name:'母女'},
    { id: 12, sid: 7, tid: 8, name:'丫鬟'},
    { id: 13, sid: 0, tid: 10, name:'義子(教唆)'},
    { id: 14, sid: 0, tid: 1, name:'夥伴'},
    { id: 15, sid: 1, tid: 6, name:'情人', _color: 'pink'},
    { id: 16, sid: 9, tid: 1, name:'受教唆殺人', _color: 'dimgray'},
    { id: 17, sid: 2, tid: 8, name:'姊妹', _color: 'pink'},
    { id: 18, sid: 9, tid: 8, name:'私通', _color: 'pink'},
    { id: 19, sid: 0, tid: 2, name:'私通', _color: 'pink'},
    { id: 20, sid: 4, tid: 8, name:'懷疑私通殺害', _color: 'dimgray'},
    { id: 21, sid: 10, tid: 9, name:'受教唆殺人'},
    { id: 22, sid: 3, tid: 0, name:'謀財害命', _color: 'dimgray'},
    { id: 23, sid: 5, tid: 6, name:'夫妻', _color: 'pink'},
    { id: 24, sid: 3, tid: 11, name:'飼養'},
    { id: 25, sid: 10, tid: 11, name:'試毒', _color: 'dimgray'}
  ]
  return links
}
