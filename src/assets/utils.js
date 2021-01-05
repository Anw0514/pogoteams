import types from './types.json'

export const evaluate = async (pokemon) => {
  let res = {
    weakAttack: [],
    strongAttack: [],
    weakDefense: [],
    strongDefense: []
  }
  for (const [type, damage] of Object.entries(types[pokemon])) {
    if (damage > 1) {
      res.strongAttack.push(type)
    } else if (damage < 1) {
      res.weakAttack.push(type)
    }
  }
  for (const [type, damage] of Object.entries(types)) {
    if (damage[pokemon] > 1) {
      res.weakDefense.push(type)
    } else if (damage[pokemon] < 1) {
      res.strongDefense.push(type)
    }
  }
  console.log(res)
}
