import Job from "../../models/Job.js";


let _jobs = [
  new Job({ title: "Software Dev", description: "Lorem lorem lorem" }),
  new Job({ title: "Hardware Dev", description: "Lorem lorem lorem" }),
]


export default class JobService {
  constructor() {
    console.log("job service works", _jobs)
  }

  get Jobs() {
    return _jobs.map(job => new Job(job))
  }

  addJob(newJob) {
    _jobs.push(new Job(newJob))
  }

}