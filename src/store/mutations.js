import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations_types.js'

export default {
  [ADD_COUNTER](state,playload){
    playload.counter += 1
    
  },
  [ADD_TO_CART](state,playload){
    playload.counter = 1
    state.cartList.push(playload)

  }
}
