
let employees = [];

function employee (Name, JobTitle, Salary){
    this.Name = Name
    this.JobTitle = JobTitle
    this.Salary = Salary
    this.Status = "Full Time"
    employees.push(this.Name)
    console.log(this)
    this.printEmployeeForm = function (){
  console.log(`
    Name: ${this.Name}
    Jobtitle: ${this.JobTitle}
    Salary: ${this.Salary}
    Status: ${this.Status}
  `)
    }
  }
  
  let heimdal = new employee ("Heimdal", "Gate Keeper", "12500/season")
  heimdal.printEmployeeForm()
  
  let odin = new employee ("Odin", "King", "500000/season")
  odin.printEmployeeForm()
  
  let tyr = new employee ("Tyr", "Lord of War", "30000/season")
  tyr.Status = "on call"
  tyr.printEmployeeForm()

 console.log(employees)

  
