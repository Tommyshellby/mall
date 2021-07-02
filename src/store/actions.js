import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations_types.js'

export default {
  addCart(context,palyload){
    /* 判断是否已添加过该商品*/
    let oldProduct = null
    context.state.cartList.forEach((item,index,array)=>{
      if(item.id===palyload.id){
        oldProduct = item
      }
    })
    /* 已添加，在原有基础上加一*/
    /* 未添加，则将新商品添加到购物车中*/
    return new Promise((resolve,reject)=>{
      if(oldProduct){
        context.commit(ADD_COUNTER,oldProduct)
        resolve('当前商品数量+1')
      }else{
        context.commit(ADD_TO_CART,palyload)
        resolve('已添加新的商品到购物车')
      }
    })

  }
}
