/*const a=Array.from(new Array(5)).map((c,i)=>i+10)
console.log(a)
const num = [1,2,3,4,5,6,7,8,9,10];
const num1 = [1,2,3,4,5,6,7,8,9,10];
const num2 = [1,2,3,4,5,6,7,8,9,10];
console.log(num.copyWithin(1,3,5));
const num = [1,2,3,4,5,6,7,8,9,10];
let a=num.find((cur,i)=>cur>5)
console.log(a)
var colours = ["Red", "Yellow", "Blue", "Black"];
var show = colours.entries();
for (i of show) {
console.log(i);
}
let map = new Map();
// inserting elements
map.set('name', 'Jack','suji','suj');
map.set('age', '27');
// looping through Map
map.forEach (myFunction);
function myFunction(value, key) {
console.log(key + '- ' + value);
}

const months = ['January', 'February', 'March', 'April'];
const transformedArray = months.map(function (month,i) {
return month+","+i;
});
console.log(transformedArray)
const users = [
    {
    first_name: 'Mike',
    location: 'London'
    },
    {
    first_name: 'Tim',
    location: 'US'
    },
    {
    first_name: 'John',
    location: 'Australia'
    }
    ];
    const usersList = [];
    for(let i=0;i<users.length;i++){
        if(users[i].first_name.includes('John')){
            usersList.push(users[i])
        }
    }
  
    console.log(usersList);

    //reduce method

    const a=[1,2,3,4,5];
    const b=a.reduce((max,cur)=>{
        if(cur>max){
            max=cur;
        }
        return max;

    },0);
console.log(b)


const users = [
    {
    first_name: 'Mike',
    last_name: 'Sheridan',
    age: 30
    },
    {
    first_name: 'Tim',
    last_name: 'Lee',
    age: 45
    },
    {
    first_name: 'John',
    last_name: 'Carte',
    age: 25
    },
    {
        first_name: 'John',
        last_name: 'Cena',
        age: 25
        }

    ];
const res=users.filter((x)=>x.age>25).map((cur)=>cur.age).reduce((sum,y)=>sum=sum+y

,0)

console.log(res)

class functions

class Student {
    constructor(rno,fname,lname){
    this.rno = rno
    this.fname = fname
    this.lname = lname
    console.log('inside constructor')
    }
    get fullName(){
    console.log('inside getter')
    return this.fname + "  - "+this.lname;
   
    }
    }
    let s1 = new Student(101,'Sachin','Tendulkar')
    console.log(s1)
    //getter is called
    console.log(s1.fullName)

    var obj1 = {1 : "Hello", 2: "World"};
var obj2 = { 3 : "Welcome", 4: "to"};
var obj3 = { 5 : "Objects"}
// Using Object.assign()
var final_obj = Object.assign(obj1, obj2, obj3);
console.log(final_obj);


var map = new Map();
map.set('John', 'author');
map.set('arry', 'publisher');
map.set('Mary', 'subscriber');
map.set('James', 'Distributor');
console.log(map.get('John'));


'use strict'
var colors = new Map([
['1', 'Red'],
['2', 'Green'],
['3', 'Yellow'],
['4', 'Violet']
]);
var itr = colors.values(); //var itr = colors.entries(); // var itr = colors.keys();
console.log(itr.next());

let a=new Date(2020, 20, 20 ,20 ,20 ,20)
try{
    (getHours());consolae.log
}
catch(error){
    console.log(error.message);
}


console.log(Number("0");

const obj={
    fname:"sujith",
    name: {
        lname:"gowda"
    },
    array:[
        {
            carname:"sujithgowda",
            model:["school","college","age"]
        },
        {   
            carname:"benz",
            model:["toyota","maruthi","nano"]
        }
    ]
}
for (let i in obj.array){
    console.log(obj.array[i].carname)
    for(let j in obj.array[i].model){
        console.log(obj.array[i].model[j])
    }
}

const obj={
        
            get fullName(){
                return this.fname+" "+this.lname
            },
            set FullName(fullname){
                this.fname=fullname.split(" ")[0];
                this.lname=fullname.split(" ")[1]
            }
        }
/*Object.defineProperty(obj,"fullname",{
    get:function(){
           return this.fname+" "+this.lname
    },
    set:function(fullname){
       this.fname=fullname.split(" ")[0];
       this.lname=fullname.split(" ")[1];
    } 
})

obj.FullName="rocky bhai";
console.log(obj.fname);
  

class student{
    constructor(fname,lname){
        this.fname=fname,
        this.lname=lname
    }
    get fullname(){
        return this.fname+" "+this.lname+" "+this.mname;
    }
}

class child extends student{
    constructor(fname, lname){
      super(fname,lname)
    }
}
var c=new child("sujith","gowda","bhai");
console.log(c.fullname);
*/

let x=true;
let pron =new Promise(function(resolve,reject){
    if(x){
        resolve("success")
    }
    else{
        reject("failure")
    }
})
console.log(pron);
