import House from "../../models/House.js";


let _houses = [
  new House({ size: "10,000", cost: "500,000", address: "123 Lorem St" }),
  new House({ size: "15,000", cost: "900,000", address: "124 Lorem St" }),
]


export default class HouseService {
  constructor() {
    console.log("house service works", _houses)
  }

  get Houses() {
    return _houses.map(house => new House(house))
  }

  addHouse(newHouse) {
    _houses.push(new House(newHouse))
  }

}