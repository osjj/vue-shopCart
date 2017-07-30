// import * as types from './mutation-types'
// export const setToken = ({ dispatch }, token) => {
//   dispatch(types.SET_TOKEN, token)
// }
import * as types from './mutation-types.js'

export const changePrice = function({commit},...args) {
	commit(types.CHANGE_PRICE,...args)
}

export const changeStyle = function({commit},...args) {
	commit(types.CHANGE_STYLE,...args)
}
export const addItem = function({commit},...args) {
	commit(types.ADD_ITEM,...args)
}
export const removeItem = function({commit},...args) {
	commit(types.REMOVE_ITEM,...args)
}