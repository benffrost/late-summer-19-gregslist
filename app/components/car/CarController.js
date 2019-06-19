import CarService from "./CarService.js";


let _carService = new CarService()

function drawCars() {
  let carsElem = document.querySelector("#cars")
  let template = ''
  let cars = _carService.Cars
  cars.forEach(car => {
    template += car.Template
  })

  template += `
  <div class="col-4 border p-1">
    <form onsubmit="app.controllers.carController.addCar(event)">
      <label for="make">Make</label>
      <input type="text" name="make" placeholder="Make" required> <br />
      <label for="model">Model</label>
      <input type="text" name="model" required> <br />
      <label for="year">Year</label>
      <input type="number" name="year" required> <br />
      <label for="color">Color</label>
      <input type="text" name="color" required> <br />
      <button type="submit" class="btn btn-primary">Add Car</button>
    </form></div>`
  carsElem.innerHTML = template
}

export default class CarController {
  constructor() {
    console.log("car controller works")
    drawCars()
  }

  addCar(e) {
    e.preventDefault()
    let form = e.target

    let newCar = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      color: form.color.value
    }

    _carService.addCar(newCar)
    form.reset()
    drawCars()
  }

}