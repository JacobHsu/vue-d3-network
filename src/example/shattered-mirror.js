import icons from './icons.js'
// shattered-mirror
// generates my nodes => [ nodes ]
export const makeMyNodes = () => {
  let nodes = [
    { id: 0, name: '', svgSym: icons.victim },
    { id: 1, name: '林居尚', svgSym: icons.gentleman },
    { id: 2, name: '林軫遠', svgSym: icons.man },
    { id: 3, name: '阿啟', svgSym: icons.nerd },
    { id: 4, name: '芬姨', svgSym: icons.lady },
    { id: 5, name: '馥霜', svgSym: icons.student },
    { id: 6, name: '林軼廣', svgSym: icons.hiphop },
    { id: 7, name: '王同槐', svgSym: icons.man },
    { id: 8, name: '蘭姑', svgSym: icons.lady },
    { id: 9, name: '王高材', svgSym: icons.man },
    { id: 10, name: '沙臣海', svgSym: icons.doctor },
    { id: 11, name: '盧恩健', svgSym: icons.gentleman },
    { id: 12, name: '盧武哲', svgSym: icons.hiphop },
    { id: 13, name: '佳憐小姐', svgSym: icons.chillinglady },
    { id: 14, name: '徐小姐', svgSym: icons.chillinglady }
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
    { id: 15, sid: 2, tid: 13, name:'?'},
    { id: 16, sid: 1, tid: 14, name:'兒媳'}

  ]
  return links
}
