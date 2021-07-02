import {request} from './request.js'

export function getDetailsData(iid){
    return request({
      url:'/detail',
      params:{
        iid
      }
    })
}

export function getRecommend(){
  return request({
    url:'/recommend'
  })
}

export class Goods{
  constructor(itemInfo,columns,shopInfo){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.price = itemInfo.price
    this.lowNowPrice = itemInfo.lowNowPrice
    this.discountDesc =itemInfo.discountDesc
    this.sells = columns[0]
    this.fans = columns[1]
    this.defaultSend = columns[2]
    this.services = shopInfo.services
  }
}

export class Shop{
  constructor(shopInfo){
    this.name = shopInfo.name
    this.sells = shopInfo.cSells
    this.fans = shopInfo.cFans
    this.goodCounts = shopInfo.cGoods
    this.logo = shopInfo.shopLogo
    this.score = shopInfo.score
    this.shopUrl = shopInfo.shopUrl
  }
}

export class Pramas{
  constructor(info,rule){
    this.size = rule.tables
    this.infos = info.set
    this.image = info.img?info.images[0]:''
  }
}

export class Content{
  constructor(rate) {
     this.counter = rate.cRate
     this.allUser = rate.list
  }
}
