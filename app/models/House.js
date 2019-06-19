export default class Car {
  constructor(data) {
    this.size = data.size || ''
    this.cost = data.cost || ''
    this.address = data.address || ''
  }

  get Template() {
    return `
    <div class="col-4 border">
        <h4>Size: ${this.size} sq ft</h4>
        <h4>Cost: ${this.cost} dollars</h4>
        <p>address: ${this.address}</p>
      </div>
    `
  }

}
