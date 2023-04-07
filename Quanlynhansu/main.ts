import {Employee} from "./ts";
 class EmployeeManager {
     static employee : Employee [] = [];
     constructor() {
     }
    display(){
         return EmployeeManager.employee
    }
    add(emloyees : Employee ){
         EmployeeManager.employee.push(emloyees)
    }
    detele(index : number){
         EmployeeManager.employee.splice(index,2)
    }
    edit(index : number , fristname : string ){
         EmployeeManager.employee[index].firstname = fristname
    }
 }
let employee =  new Employee("toan","cao","06/10/97","vinh phuc","ha noi");
let employee1 =  new Employee("khanh","hieu","05/10/96","ha dong","ha tinh");
let employee2 =  new Employee("duc","kim","03/10/91","ha tinh","ha nam");
let employeeManager = new EmployeeManager();
employeeManager.add(employee);
employeeManager.add(employee1);
employeeManager.add(employee2);
employeeManager.detele(0)
// employeeManager.edit(1,"con cac")
console.table(employeeManager.display())
