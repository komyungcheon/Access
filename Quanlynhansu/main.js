"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_1 = require("./ts");
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.prototype.display = function () {
        return EmployeeManager.employee;
    };
    EmployeeManager.prototype.add = function (emloyees) {
        EmployeeManager.employee.push(emloyees);
    };
    EmployeeManager.prototype.detele = function (index) {
        EmployeeManager.employee.splice(index, 2);
    };
    EmployeeManager.prototype.edit = function (index, fristname) {
        EmployeeManager.employee[index].firstname = fristname;
    };
    EmployeeManager.employee = [];
    return EmployeeManager;
}());
var employee = new ts_1.Employee("toan", "cao", "06/10/97", "vinh phuc", "ha noi");
var employee1 = new ts_1.Employee("khanh", "hieu", "05/10/96", "ha dong", "ha tinh");
var employee2 = new ts_1.Employee("duc", "kim", "03/10/91", "ha tinh", "ha nam");
var employeeManager = new EmployeeManager();
employeeManager.add(employee);
employeeManager.add(employee1);
employeeManager.add(employee2);
employeeManager.detele(0);
// employeeManager.edit(1,"con cac")
console.table(employeeManager.display());
