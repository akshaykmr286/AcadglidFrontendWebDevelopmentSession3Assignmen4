//parent abstract class
abstract class Department {
    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; //this method should be implemanted in the derived classes
}


//child class of parent abstract class
class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    printName(): void {
       return super.printName();//calling method of parent class
    }
    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

//another child class HRDepartment derived from PArent abstract class
class HRDepartment extends Department {
    constructor() {
        super("Human Resource Management"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The HRM meeting will start at 3pm.");
    }

    generateReports(): void {
        console.log("Generating HRM reports...");
    }
}

//creating objects
let acdep: Department; // ok to create a reference to an abstract type
acdep = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
acdep.printName();
acdep.printMeeting();

let hrdep: Department; // ok to create a reference to an abstract type
hrdep = new HRDepartment(); // ok to create and assign a non-abstract subclass
hrdep.printName();//it will access the parent method
hrdep.printMeeting();
//passing in to html page
//document.getElementById("res").innerHTML = a+'<br>'+b+'<br>'+c+'<br>'+d+'<br>'+e;