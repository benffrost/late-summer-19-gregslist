export default class Car {
  constructor(data) {
    this.title = data.title || ''
    this.description = data.description || ''
  }

  get Template() {
    return `
    <div class="col-4 border">
        <h4>Title: ${this.title}</h4>
        <p>Description: ${this.description}</p>
      </div>
    `
  }

}
