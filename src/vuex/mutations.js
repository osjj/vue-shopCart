import * as types from './mutation-types.js'
const mutations = {
  [types.CHANGE_STYLE](state, {color, url}) {
    console.log(color)
    state.iPhone6S.activeStyle = color
    state.iPhone6S.activeStyleUrl = url
  },
  [types.CHANGE_PRICE](state, {type,price,color,url}) {
    state.iPhone6S.activeStorage = type
    state.iPhone6S.price = price
    state.iPhone6S.isSelected = false
  },
  [types.ADD_ITEM](state) {
    const activeStyle = state.iPhone6S.activeStyle === undefined ? '银色' : state.iPhone6S.activeStyle
    const type = activeStyle + '，' +  state.iPhone6S.activeStorage
    const cartInfo = {
      type: type,
      count: 1,
      price: state.iPhone6S.price
    }
    state.cart.push(cartInfo)
  },
  [types.REMOVE_ITEM](state, index) {
    state.cart.splice(index,1)
  }
}

export default  mutations