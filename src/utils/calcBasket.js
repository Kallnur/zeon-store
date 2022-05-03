import { newPrice } from "./allFunc"

export const allPrice = (products) => {
  const amountPrice = products.map(obj => { return obj.price * obj.basket  })
  return amountPrice.reduce((a, b) => a + b, 0)
}

export const amountProduct = (products) => {
  const amount = products.map(obj => obj.amaunt * obj.basket)
  return amount.reduce((a, b) => a + b, 0)
}

export const amountLines = (products) => {
  const amountLine = products.map(obj => obj.basket)
  return amountLine.reduce((a, b) => a + b, 0)
}

export const checkPerc = (products) => {
  let allPerc = null;
  const perc = products.filter(obj => obj.perc)
  if(perc.length){
    perc.map(obj => {
      let price = obj.price * obj.basket;
      let perc  = newPrice(price, obj.perc)
      console.log(price, perc)
      return allPerc += price - perc
    })
  }
  return allPerc
}