import CarController from "./components/car/CarController.js";
import HouseController from "./components/house/HouseController.js";
import JobController from "./components/job/JobController.js";


class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      houseController: new HouseController(),
      jobController: new JobController()

    }
  }

  changeView(evt, tabName) {
    // Get all elements with class="tabcontent" and hide them
    let tabcontent = document.getElementsByClassName("tabcontent");

    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";



  }
}

window["app"] = new App()