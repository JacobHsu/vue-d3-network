import icons from '../icons.js'

// generates my nodes => [ nodes ]
export const makeMyNodes = () => {
  let nodes = [
    { id: 0, name: '岳飛(大將軍)', svgSym: icons.victim },
    { id: 1, name: '蘇賢(蘇沐)', svgSym: icons.missmaid },
    { id: 2, name: '岳守仁(右丞相)', svgSym: icons.master },
    { id: 3, name: '依瑤子', svgSym: icons.litterateur },
    { id: 4, name: '秦知衛(戍邊大將軍)', svgSym: icons.eunuch },
    { id: 5, name: '秦楓(岳家右將軍)', svgSym: icons.official },
    { id: 6, name: '龍涯子(岳家左將軍)', svgSym: icons.rebel },
    { id: 7, name: '葉臨淵(軍師)', svgSym: icons.victim },
    { id: 8, name: '方不惑(左丞相))', svgSym: icons.official },
    { id: 9, name: '中年隨從', svgSym: icons.monk },
    { id: 10, name: '麻多羅(金國)', svgSym: icons.official },
    { id: 11, name: '蘇家(蠱魂師)', svgSym: icons.victim },
    { id: 12, name: '業語琴', svgSym: icons.princess },
    { id: 13, name: '秦夫人', svgSym: icons.princess },
    { id: 14, name: '骨勒塔(西夏使臣)', svgSym: icons.monk },
    { id: 15, name: '依瑤(渡往庭)', svgSym: icons.missmaid },
    { id: 16, name: '董丞安(鑄鈴師)', svgSym: icons.official },
  ]
  return nodes
}

// generates my links => [ links ]
export const makeMyLinks = (nodes, maxLinks) => {
  let links = []
  links = [
    { id: 1, sid: 0, tid: 5, name:'同袍' },
    { id: 2, sid: 0, tid: 6, name:'同袍'},
    { id: 3, sid: 0, tid: 7, name:'同袍'},
    { id: 4, sid: 0, tid: 8, name:'背叛', _color: 'dimgray'},
    { id: 5, sid: 4, tid: 5, name:'父子'},
    { id: 6, sid: 7, tid: 12, name:'父女'},
    { id: 7, sid: 8, tid: 12, name:'夫妻'},
    { id: 8, sid: 0, tid: 15, name:'二夫人'},
    { id: 9, sid: 13, tid: 15, name:'好姊妹'},
    { id: 10, sid: 13, tid: 4, name:'母子'},
    { id: 11, sid: 12, tid: 11, name:'學習'},
    { id: 12, sid: 15, tid: 11, name:'學習'},
    { id: 13, sid: 11, tid: 1, name:'獨孤'},
    { id: 14, sid: 10, tid: 5, name:'俘虜'},
    { id: 15, sid: 10, tid: 11, name:'造訪'},
    { id: 16, sid: 3, tid: 15, name:'母子'},
    { id: 17, sid: 6, tid: 3, name:'救'},
    { id: 18, sid: 0, tid: 2, name:'父子'},
    { id: 19, sid: 16, tid: 11, name:'齊名'},
    { id: 20, sid: 9, tid: 14, name:'同行'},
    { id: 21, sid: 14, tid: 15, name:'造訪'}
  ]
  return links
}
