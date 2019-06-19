import HouseService from "./HouseService.js";


let _houseService = new HouseService()

function drawHouses() {
  let housesElem = document.querySelector("#houses")
  let template = ''
  let houses = _houseService.Houses
  houses.forEach(house => {
    template += house.Template
  })

  template += `
  <div class="col-4 border p-1">
    <form onsubmit="app.ccontrollers.houseController.addHouse(event)">
      <label for="size">Size</label>
      <input type="text" name="size" placeholder="size" required> <br />
      <label for="cost">Cost</label>
      <input type="text" name="cost" required> <br />
      <label for="address">Address</label>
      <input type="text" name="address" required> <br />
      <button type="submit" class="btn btn-primary">Add House</button>
    </form></div>`

  housesElem.innerHTML = template
}

export default class HouseController {
  constructor() {
    console.log("house controller works")
    drawHouses()
  }

  addHouse(e) {
    e.preventDefault()
    let form = e.target

    let newHouse = {
      size: form.size.value,
      cost: form.cost.value,
      address: form.address.value,
    }

    _houseService.addHouse(newHouse)
    form.reset()
    drawHouses()
  }

}