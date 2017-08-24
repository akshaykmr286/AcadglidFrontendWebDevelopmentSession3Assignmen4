var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//parent abstract class
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
//child class of parent abstract class
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.printName = function () {
        return _super.prototype.printName.call(this); //calling method of parent class
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
//another child class HRDepartment derived from PArent abstract class
var HRDepartment = (function (_super) {
    __extends(HRDepartment, _super);
    function HRDepartment() {
        return _super.call(this, "Human Resource Management") || this;
    }
    HRDepartment.prototype.printMeeting = function () {
        console.log("The HRM meeting will start at 3pm.");
    };
    HRDepartment.prototype.generateReports = function () {
        console.log("Generating HRM reports...");
    };
    return HRDepartment;
}(Department));
//creating objects
var acdep; // ok to create a reference to an abstract type
acdep = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
acdep.printName();
acdep.printMeeting();
var hrdep; // ok to create a reference to an abstract type
hrdep = new HRDepartment(); // ok to create and assign a non-abstract subclass
hrdep.printName(); //it will access the parent method
hrdep.printMeeting();
//passing in to html page
//document.getElementById("res").innerHTML = a+'<br>'+b+'<br>'+c+'<br>'+d+'<br>'+e; 
