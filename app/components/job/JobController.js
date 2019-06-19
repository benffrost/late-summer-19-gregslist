import JobService from "./JobService.js";


let _jobService = new JobService()

function drawJobs() {
  let jobsElem = document.querySelector("#jobs")
  let template = ''
  let jobs = _jobService.Jobs
  jobs.forEach(job => {
    template += job.Template
  })

  template += `
  <div class="col-4 border p-1">
    <form onsubmit="app.controllers.jobController.addJob(event)">
      <label for="title">Title</label>
      <input type="text" name="title" placeholder="Title" required> <br />
      <label for="description">Description</label>
      <input type="text" name="description" required> <br />
      <button type="submit" class="btn btn-primary">Add Job</button>
    </form></div>`


  jobsElem.innerHTML = template
}

export default class JobController {
  constructor() {
    console.log("job controller works")
    drawJobs()
  }

  addJob(e) {
    e.preventDefault()
    let form = e.target

    let newJob = {
      title: form.title.value,
      description: form.description.value,
    }

    _jobService.addJob(newJob)
    form.reset()
    drawJobs()
  }

}