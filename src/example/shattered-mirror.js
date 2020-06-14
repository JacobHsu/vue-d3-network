import icons from './icons.js'
// shattered-mirror
// generates my nodes => [ nodes ]
export const makeMyNodes = () => {
  let nodes = [
    { id: 0, name: '林于軒(大少)', svgSym: icons.spy },
    { id: 1, name: '林居尚', svgSym: icons.victim },
    { id: 2, name: '林軫遠(二少)', svgSym: icons.man },
    { id: 3, name: '阿啟', svgSym: icons.nerd },
    { id: 4, name: '芬姨', svgSym: icons.maid },
    { id: 5, name: '馥霜', svgSym: icons.student },
    { id: 6, name: '林軼廣(三少)', svgSym: icons.hiphop },
    { id: 7, name: '王同槐', svgSym: icons.man },
    { id: 8, name: '蘭姑', svgSym: icons.maid },
    { id: 9, name: '王高材', svgSym: icons.worker },
    { id: 10, name: '沙臣海', svgSym: icons.judge },
    { id: 11, name: '盧恩健', svgSym: icons.gentleman },
    { id: 12, name: '盧武哲', svgSym: icons.hiphop },
    { id: 13, name: '佳憐小姐', svgSym: icons.chillinglady },
    { id: 14, name: '徐小姐', svgSym: icons.chillinglady },
    { id: 15, name: '章先生', svgSym: icons.father },
    { id: 16, name: '方勝元', svgSym: icons.npcCriminal },
    { id: 17, name: '徐氏', svgSym: icons.female },
  ]
  return nodes
}

// generates my links => [ links ]
export const makeMyLinks = (nodes, maxLinks) => {
  let links = []
  links = [
    { id: 1, sid: 3, tid: 12, name:'伴讀' },
    { id: 2, sid: 1, tid: 11, name:'交好'},
    { id: 3, sid: 2, tid: 3, name:'伴讀'},
    { id: 4, sid: 1, tid: 2, name:'父子'},
    { id: 5, sid: 1, tid: 6, name:'父子'},
    { id: 6, sid: 8, tid: 9, name:'夫妻'},
    { id: 7, sid: 9, tid: 7, name:'父子'},
    { id: 8, sid: 4, tid: 1, name:'雇傭'},
    { id: 9, sid: 4, tid: 5, name:'母女'},
    { id: 10, sid: 2, tid: 6, name:'兄弟'},
    { id: 11, sid: 10, tid: 9, name:'法辦'},
    { id: 12, sid: 11, tid: 12, name:'父子'},
    { id: 13, sid: 1, tid: 7, name:'雇傭'},
    { id: 14, sid: 11, tid: 13, name:'父女'},
    { id: 15, sid: 2, tid: 13, name:'情侶'},
    { id: 16, sid: 1, tid: 14, name:'兒媳'},
    { id: 17, sid: 1, tid: 8, name:'雇傭'},
    { id: 18, sid: 3, tid: 15, name:'義子'},
    { id: 19, sid: 5, tid: 7, name:'髮小', _color: 'pink'},
    { id: 20, sid: 5, tid: 6, name:'假戀愛', _color: 'pink'},
    { id: 21, sid: 5, tid: 16, name:'父女', _color: 'pink'},
    { id: 22, sid: 4, tid: 8, name:'誤殺', _color: 'dimgray'},
    { id: 23, sid: 5, tid: 1, name:'為父報仇', _color: 'dimgray'},
    { id: 24, sid: 0, tid: 14, name:'情侶', _color: 'pink'},
    { id: 25, sid: 0, tid: 16, name:'同志', _color: 'pink'},
    { id: 26, sid: 0, tid: 2, name:'兄弟', _color: 'pink'},
    { id: 27, sid: 2, tid: 14, name:'關照', _color: 'pink'},
    { id: 28, sid: 13, tid: 15, name:'父女', _color: 'pink'},
    { id: 29, sid: 10, tid: 15, name:'法辦', _color: 'SkyBlue'},
    { id: 30, sid: 10, tid: 0, name:'法辦', _color: 'SkyBlue'},
    { id: 31, sid: 10, tid: 17, name:'法辦', _color: 'SkyBlue'},
    { id: 32, sid: 14, tid: 17, name:'母女', _color: 'pink'},
    { id: 33, sid: 1, tid: 10, name:'談判', _color: 'SkyBlue'},
    { id: 34, sid: 1, tid: 9, name:'出賣', _color: 'SkyBlue'},
    { id: 35, sid: 1, tid: 15, name:'出賣', _color: 'SkyBlue'},
    { id: 36, sid: 1, tid: 0, name:'保護', _color: 'SkyBlue'},
    { id: 37, sid: 0, tid: 9, name:'同謀', _color: 'SkyBlue'},
    { id: 38, sid: 1, tid: 16, name:'出賣', _color: 'SkyBlue'},
  ]
  return links
}
