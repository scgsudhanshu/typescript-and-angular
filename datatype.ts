var fname = 'sudhanshu'
console.log(fname)

var lname : string;
lname='gupta'
console.log(lname);

var age : number;
age=20
console.log(age);

console.log("age : "+age)
console.log(age.toString());

var empList : (string|number)[] 
empList= ["Sudhanshu1",'Sudhanshu2','Sudhanshu3',10]

var deptList : Array<string>
deptList = ["Sudhanshu1",'Sudhanshu2','Sudhanshu3']
var sudhanshu = age.toString();
console.log(empList);

console.log(deptList);

var numList = [10,2,13,4,3];

console.log(typeof numList);

var sum = numList.reduce((acc,num)=> acc/num)

console.log(sum)

const enum color {
    red,
    blue,
    green
}

console.log(color.blue)
