import icons from './icons.js'

// generates my nodes => [ nodes ]
export const makeMyNodes = () => {
  let nodes = [
    { id: 0, name: '豬頭', svgSym: icons.victim },
    { id: 1, name: '顧東(402)', svgSym: icons.gentleman },
    { id: 2, name: '錢業(401)', svgSym: icons.hiphop },
    { id: 3, name: '梁知(403)', svgSym: icons.man },
    { id: 4, name: '梁翼', svgSym: icons.victim },
    { id: 5, name: '張富春(礦場)', svgSym: icons.gentleman },
    { id: 6, name: '宋了然(酒店)', svgSym: icons.gentleman },
    { id: 7, name: '女人', svgSym: icons.student },
    { id: 8, name: '路遇', svgSym: icons.man },
    { id: 9, name: '姬春雁', svgSym: icons.chillinglady },
  ]
  return nodes
}

// generates my links => [ links ]
export const makeMyLinks = (nodes, maxLinks) => {
  let links = []
  links = [
    { id: 1, sid: 1, tid: 2, name:'合謀' },
    { id: 2, sid: 2, tid: 3, name:'合謀'},
    { id: 3, sid: 2, tid: 4, name:'陷害'},
    { id: 4, sid: 3, tid: 4, name:'陷害'},
    { id: 5, sid: 1, tid: 5, name:'欺騙'},
    { id: 6, sid: 2, tid: 6, name:'生意夥伴'},
    { id: 7, sid: 1, tid: 7, name:'路遇'},
    { id: 8, sid: 2, tid: 7, name:'?'},
    { id: 9, sid: 0, tid: 2, name:'?'},
    { id: 10, sid: 2, tid: 9, name:'?'},
  ]
  return links
}
