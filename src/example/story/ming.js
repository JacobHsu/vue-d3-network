import icons from '../icons.js'

// generates my nodes => [ nodes ]
export const makeMyNodes = () => {
  let nodes = [
    { id: 0, name: '夏允彝', svgSym: icons.victim },
    { id: 1, name: '崇禎', svgSym: icons.master },
    { id: 2, name: '曹化淳', svgSym: icons.master },
    { id: 3, name: '王承恩', svgSym: icons.litterateur },
    { id: 4, name: '魏忠賢(閹黨)', svgSym: icons.eunuch },
    { id: 5, name: '楊璟(東林黨 南明)', svgSym: icons.official },
    { id: 6, name: '李自成(起義軍)', svgSym: icons.rebel },
    { id: 7, name: '姚文禮(兵部)', svgSym: icons.official },
    { id: 8, name: '袁崇煥(抗清)', svgSym: icons.official },
    { id: 9, name: '洪承疇(投清)', svgSym: icons.official },
    { id: 10, name: '佐良玉(南)', svgSym: icons.official },
    { id: 11, name: '陳新甲', svgSym: icons.victim },
    { id: 12, name: '公主', svgSym: icons.princess },
    { id: 13, name: '柳璃璃', svgSym: icons.princess },
    { id: 14, name: '沈青風', svgSym: icons.staff },
    { id: 15, name: '秋筠', svgSym: icons.missmaid },
    { id: 16, name: '伊辛(清)', svgSym: icons.official },
  ]
  return nodes
}

// generates my links => [ links ]
export const makeMyLinks = (nodes, maxLinks) => {
  let links = []
  links = [
    { id: 1, sid: 1, tid: 2, name:'宦官' },
    { id: 2, sid: 1, tid: 3, name:'宦官'},
    { id: 3, sid: 2, tid: 4, name:'剿滅'},
    { id: 4, sid: 3, tid: 2, name:'師承'},
    { id: 5, sid: 4, tid: 5, name:'敵對', _color: 'dimgray'},
    { id: 6, sid: 6, tid: 7, name:'敵對'},
    { id: 7, sid: 1, tid: 7, name:'臣下'},
    { id: 8, sid: 1, tid: 8, name:'臣下'},
    { id: 9, sid: 3, tid: 9, name:'敵對'},
    { id: 10, sid: 1, tid: 10, name:'臣下'},
    { id: 11, sid: 9, tid: 11, name:'頂替'},
    { id: 12, sid: 7, tid: 12, name:'照顧'},
    { id: 13, sid: 9, tid: 13, name:'成親'},
    { id: 14, sid: 3, tid: 6, name:'收留'},
    { id: 15, sid: 9, tid: 14, name:'幕僚'},
    { id: 16, sid: 13, tid: 15, name:'主僕'},
    { id: 17, sid: 3, tid: 16, name:'聊天'},
    { id: 18, sid: 0, tid: 7, name:'聊天'}

  ]
  return links
}
